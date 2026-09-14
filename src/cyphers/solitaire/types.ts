// src/ciphers/solitaire/types.ts

export type Suit = 'CLUBS' | 'DIAMONDS' | 'HEARTS' | 'SPADES';

export interface StandardCard {
  readonly suit: Suit;
  readonly value: number; // 1 (Ace) to 13 (King)
  readonly id: number; // 1 to 52
}

export interface JokerCard {
  readonly suit: 'JOKER';
  readonly variant: 'A' | 'B';
  readonly id: 53 | 54;
}

export type Card = StandardCard | JokerCard;
export type Deck = Card[];
