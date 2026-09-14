// src/ciphers/solitaire/solitaire.ts
import type { Deck } from './types.js';
import { createDeck, getCardValue } from './deck.js';

export class Solitaire {
  private deck: Deck;

  constructor(initialDeck?: Deck) {
    this.deck = initialDeck ? [...initialDeck] : createDeck();
  }

  /**
   * Keys the deck using a passphrase according to the Schneier spec.
   */
  public keyDeck(passphrase: string): void {
    const clean = passphrase.toUpperCase().replace(/[^A-Z]/g, '');
    for (const char of clean) {
      this.stepDeck();
      const shift = char.charCodeAt(0) - 64; // A=1 ... Z=26
      this.countCut(shift);
    }
  }

  /**
   * Advances deck state by 1 round (steps 1 through 4).
   */
  public stepDeck(): void {
    // Step 1: Shift Joker A down 1
    this.shiftCard(53, 1);

    // Step 2: Shift Joker B down 2
    this.shiftCard(54, 2);

    // Step 3: Triple cut
    this.tripleCut();

    // Step 4: Count cut based on bottom card
    const bottomVal = getCardValue(this.deck[53]);
    this.countCut(bottomVal);
  }

  /**
   * Generates the next valid keystream letter [A-Z].
   */
  public nextKey(): string {
    while (true) {
      this.stepDeck();
      const topVal = getCardValue(this.deck[0]);
      const checkCard = this.deck[topVal];

      if (checkCard.suit !== 'JOKER') {
        const val = getCardValue(checkCard);
        const letterCode = ((val - 1) % 26) + 1; // 1 to 26
        return String.fromCharCode(64 + letterCode);
      }
      // If joker, cycle again without output
    }
  }

  public encrypt(plaintext: string): string {
    const sanitized = plaintext.toUpperCase().replace(/[^A-Z]/g, '');
    let ciphertext = '';

    for (const char of sanitized) {
      const p = char.charCodeAt(0) - 64;
      const k = this.nextKey().charCodeAt(0) - 64;
      const c = ((p + k - 1) % 26) + 1;
      ciphertext += String.fromCharCode(64 + c);
    }

    // Format into standard 5-letter cryptographic blocks
    return ciphertext.match(/.{1,5}/g)?.join(' ') ?? '';
  }

  public decrypt(ciphertext: string): string {
    const sanitized = ciphertext.toUpperCase().replace(/[^A-Z]/g, '');
    let plaintext = '';

    for (const char of sanitized) {
      const c = char.charCodeAt(0) - 64;
      const k = this.nextKey().charCodeAt(0) - 64;
      let p = (c - k) % 26;
      if (p <= 0) p += 26;
      plaintext += String.fromCharCode(64 + p);
    }

    return plaintext;
  }

  // Permutation primitives
  private shiftCard(cardId: number, count: number): void {
    const idx = this.deck.findIndex((c) => c.id === cardId);
    const card = this.deck.splice(idx, 1)[0];
    let newIdx = idx + count;

    if (newIdx > 53) {
      newIdx = ((newIdx - 1) % 53) + 1;
    }
    this.deck.splice(newIdx, 0, card);
  }

  private tripleCut(): void {
    const idxA = this.deck.findIndex((c) => c.id === 53);
    const idxB = this.deck.findIndex((c) => c.id === 54);
    const first = Math.min(idxA, idxB);
    const second = Math.max(idxA, idxB);

    const top = this.deck.slice(0, first);
    const middle = this.deck.slice(first, second + 1);
    const bottom = this.deck.slice(second + 1);

    this.deck = [...bottom, ...middle, ...top];
  }

  private countCut(count: number): void {
    if (count >= 53) return; // Cut of 53 leaves 54-card deck unchanged
    const bottomCard = this.deck[53];
    const toCut = this.deck.slice(0, count);
    const remaining = this.deck.slice(count, 53);

    this.deck = [...remaining, ...toCut, bottomCard];
  }
}
