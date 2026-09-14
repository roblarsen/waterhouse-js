import { describe, expect, it } from 'vitest';
import { Solitaire } from '../src/cyphers/solitaire/solitaire.js';

describe('Solitaire Cipher', () => {
  it('should generate the first 10 keystream letters from an unkeyed deck according to Schneier test vectors', () => {
    const cipher = new Solitaire();
    const expected = ['D', 'W', 'J', 'X', 'H', 'Y', 'R', 'F', 'D', 'G'];
    const keys: string[] = [];

    for (let i = 0; i < 10; i++) {
      keys.push(cipher.nextKey());
    }

    expect(keys).toEqual(expected);
  });

  it('should encrypt AAAAAAAAAA into EXKYI ZSGEH with an unkeyed deck', () => {
    const cipher = new Solitaire();
    const plaintext = 'AAAAAAAAAA';
    const ciphertext = cipher.encrypt(plaintext);

    expect(ciphertext).toBe('EXKYI ZSGEH');
  });

  it('should decrypt EXKYI ZSGEH back to AAAAAAAAAA with an unkeyed deck', () => {
    const cipher = new Solitaire();
    const ciphertext = 'EXKYI ZSGEH';
    const plaintext = cipher.decrypt(ciphertext);

    expect(plaintext).toBe('AAAAAAAAAA');
  });

  it('should support keying the deck with a passphrase and perform encryption/decryption roundtrip', () => {
    const cipher1 = new Solitaire();
    cipher1.keyDeck('CRYPTONOMICON');
    const ciphertext = cipher1.encrypt('SOLITAIRECIPHER');

    const cipher2 = new Solitaire();
    cipher2.keyDeck('CRYPTONOMICON');
    const decrypted = cipher2.decrypt(ciphertext);

    expect(decrypted).toBe('SOLITAIRECIPHER');
  });

  it('should sanitize non-alphabetic characters and convert to uppercase', () => {
    const cipher1 = new Solitaire();
    const cipher2 = new Solitaire();

    const encrypted1 = cipher1.encrypt('hello world!');
    const encrypted2 = cipher2.encrypt('HELLOWORLD');

    expect(encrypted1).toBe(encrypted2);
  });

  it('should advance deck state via stepDeck without throwing errors', () => {
    const cipher = new Solitaire();
    expect(() => cipher.stepDeck()).not.toThrow();
  });
});
