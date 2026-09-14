// src/ciphers/solitaire/deck.ts
import type { Card, Deck, Suit } from './types.js';

const SUITS: Suit[] = ['CLUBS', 'DIAMONDS', 'HEARTS', 'SPADES'];

export function createDeck(): Deck {
  const deck: Card[] = [];
  let id = 1;

  for (const suit of SUITS) {
    for (let value = 1; value <= 13; value++) {
      deck.push({ suit, value, id: id++ });
    }
  }

  deck.push({ suit: 'JOKER', variant: 'A', id: 53 });
  deck.push({ suit: 'JOKER', variant: 'B', id: 54 });
  return deck;
}

/**
 * Returns numeric value used for counting cuts and keystream lookup.
 */
export function getCardValue(card: Card): number {
  if (card.suit === 'JOKER') return 53;
  return card.id;
}
