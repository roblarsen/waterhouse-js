declare const aperys: 1.202056903159594;

declare function factorial(num: bigint | number): bigint;

declare function factors(num: number): number[];

declare function isPrime(num: number): boolean;

declare class Utilities {
    cosec(num: number): number;
    sec(num: number): number;
    radians(degrees: number): number;
    degrees(radians: number): number;
}

declare function collatz(num: bigint | number): bigint;

declare function triangle(num: number): number;
declare function generateTriangleNumbers(num: number): number[];

type Suit = 'CLUBS' | 'DIAMONDS' | 'HEARTS' | 'SPADES';
interface StandardCard {
    readonly suit: Suit;
    readonly value: number;
    readonly id: number;
}
interface JokerCard {
    readonly suit: 'JOKER';
    readonly variant: 'A' | 'B';
    readonly id: 53 | 54;
}
type Card = StandardCard | JokerCard;
type Deck = Card[];

declare class Solitaire {
    private deck;
    constructor(initialDeck?: Deck);
    /**
     * Keys the deck using a passphrase according to the Schneier spec.
     */
    keyDeck(passphrase: string): void;
    /**
     * Advances deck state by 1 round (steps 1 through 4).
     */
    stepDeck(): void;
    /**
     * Generates the next valid keystream letter [A-Z].
     */
    nextKey(): string;
    encrypt(plaintext: string): string;
    decrypt(ciphertext: string): string;
    private shiftCard;
    private tripleCut;
    private countCut;
}

export { Solitaire, Utilities, aperys, collatz, factorial, factors, generateTriangleNumbers, isPrime, triangle };
