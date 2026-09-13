import { describe, expect, it } from 'vitest';
import collatz from '../src/collatz.js';

describe('collatz', () => {
  it('should return 0 for 0', () => {
    expect(collatz(0)).toBe(0n);
    expect(collatz(0n)).toBe(0n);
  });

  it('should return 1 for 1', () => {
    expect(collatz(1)).toBe(1n);
    expect(collatz(1n)).toBe(1n);
  });

  it('should return correct step count for numbers', () => {
    // Sequence for 6: 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 (9 steps total including start)
    expect(collatz(6)).toBe(9n);
    // Sequence for 10: 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 (7 steps total)
    expect(collatz(10n)).toBe(7n);
  });
});
