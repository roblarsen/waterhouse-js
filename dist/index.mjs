// src/constants.ts
var aperys = 1.202056903159594;

// src/factorial.ts
function factorial(num) {
  const n = typeof num === "bigint" ? num : BigInt(num);
  let result = 1n;
  for (let current = n; current > 0n; current -= 1n) {
    result *= current;
  }
  return result;
}
var factorial_default = factorial;

// src/factors.ts
function factors(num) {
  const value = Math.trunc(Math.abs(num));
  if (value < 2) {
    return [];
  }
  const result = [];
  for (let i = 1; i <= Math.sqrt(value); i += 1) {
    if (value % i === 0) {
      result.push(i);
      const pairedFactor = value / i;
      if (pairedFactor !== i) {
        result.push(pairedFactor);
      }
    }
  }
  return [...new Set(result)].sort((left, right) => left - right);
}
var factors_default = factors;

// src/primes.ts
function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let divisor = 3; divisor <= Math.sqrt(num); divisor += 2) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
}

// src/utilities.ts
var Utilities = class {
  cosec(num) {
    return 1 / Math.sin(num);
  }
  sec(num) {
    return 1 / Math.cos(num);
  }
  radians(degrees) {
    return degrees * (Math.PI / 180);
  }
  degrees(radians) {
    return radians * (180 / Math.PI);
  }
};
var utilities_default = Utilities;

// src/collatz.ts
function step(num) {
  if (num % 2n === 0n) {
    return num / 2n;
  }
  return 3n * num + 1n;
}
function collatz(num) {
  let n = typeof num === "bigint" ? num : BigInt(num);
  let index = 1n;
  if (n === 0n) {
    return 0n;
  }
  while (n !== 1n) {
    n = step(n);
    index += 1n;
  }
  return index;
}
var collatz_default = collatz;

// src/triangle-numbes.ts
function triangle(num) {
  return num * (num + 1) / 2;
}
function generateTriangleNumbers(num) {
  const triangles = [];
  for (let i = 1; i <= num; i += 1) {
    triangles.push(triangle(i));
  }
  return triangles;
}

// src/cyphers/solitaire/deck.ts
var SUITS = ["CLUBS", "DIAMONDS", "HEARTS", "SPADES"];
function createDeck() {
  const deck = [];
  let id = 1;
  for (const suit of SUITS) {
    for (let value = 1; value <= 13; value++) {
      deck.push({ suit, value, id: id++ });
    }
  }
  deck.push({ suit: "JOKER", variant: "A", id: 53 });
  deck.push({ suit: "JOKER", variant: "B", id: 54 });
  return deck;
}
function getCardValue(card) {
  if (card.suit === "JOKER") return 53;
  return card.id;
}

// src/cyphers/solitaire/solitaire.ts
var Solitaire = class {
  deck;
  constructor(initialDeck) {
    this.deck = initialDeck ? [...initialDeck] : createDeck();
  }
  /**
   * Keys the deck using a passphrase according to the Schneier spec.
   */
  keyDeck(passphrase) {
    const clean = passphrase.toUpperCase().replace(/[^A-Z]/g, "");
    for (const char of clean) {
      this.stepDeck();
      const shift = char.charCodeAt(0) - 64;
      this.countCut(shift);
    }
  }
  /**
   * Advances deck state by 1 round (steps 1 through 4).
   */
  stepDeck() {
    this.shiftCard(53, 1);
    this.shiftCard(54, 2);
    this.tripleCut();
    const bottomVal = getCardValue(this.deck[53]);
    this.countCut(bottomVal);
  }
  /**
   * Generates the next valid keystream letter [A-Z].
   */
  nextKey() {
    while (true) {
      this.stepDeck();
      const topVal = getCardValue(this.deck[0]);
      const checkCard = this.deck[topVal];
      if (checkCard.suit !== "JOKER") {
        const val = getCardValue(checkCard);
        const letterCode = (val - 1) % 26 + 1;
        return String.fromCharCode(64 + letterCode);
      }
    }
  }
  encrypt(plaintext) {
    const sanitized = plaintext.toUpperCase().replace(/[^A-Z]/g, "");
    let ciphertext = "";
    for (const char of sanitized) {
      const p = char.charCodeAt(0) - 64;
      const k = this.nextKey().charCodeAt(0) - 64;
      const c = (p + k - 1) % 26 + 1;
      ciphertext += String.fromCharCode(64 + c);
    }
    return ciphertext.match(/.{1,5}/g)?.join(" ") ?? "";
  }
  decrypt(ciphertext) {
    const sanitized = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");
    let plaintext = "";
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
  shiftCard(cardId, count) {
    const idx = this.deck.findIndex((c) => c.id === cardId);
    const card = this.deck.splice(idx, 1)[0];
    let newIdx = idx + count;
    if (newIdx > 53) {
      newIdx = (newIdx - 1) % 53 + 1;
    }
    this.deck.splice(newIdx, 0, card);
  }
  tripleCut() {
    const idxA = this.deck.findIndex((c) => c.id === 53);
    const idxB = this.deck.findIndex((c) => c.id === 54);
    const first = Math.min(idxA, idxB);
    const second = Math.max(idxA, idxB);
    const top = this.deck.slice(0, first);
    const middle = this.deck.slice(first, second + 1);
    const bottom = this.deck.slice(second + 1);
    this.deck = [...bottom, ...middle, ...top];
  }
  countCut(count) {
    if (count >= 53) return;
    const bottomCard = this.deck[53];
    const toCut = this.deck.slice(0, count);
    const remaining = this.deck.slice(count, 53);
    this.deck = [...remaining, ...toCut, bottomCard];
  }
};
export {
  Solitaire,
  utilities_default as Utilities,
  aperys,
  collatz_default as collatz,
  factorial_default as factorial,
  factors_default as factors,
  generateTriangleNumbers,
  isPrime,
  triangle
};
