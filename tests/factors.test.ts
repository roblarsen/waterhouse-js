import { describe, expect, it } from 'vitest';
import factors from '../src/factors.js';

describe('factors', () => {
  it('should return empty array for numbers less than 2', () => {
    expect(factors(0)).toEqual([]);
    expect(factors(1)).toEqual([]);
    expect(factors(-1)).toEqual([]);
  });

  it('should return factors sorted in ascending order for prime numbers', () => {
    expect(factors(7)).toEqual([1, 7]);
    expect(factors(13)).toEqual([1, 13]);
  });

  it('should return sorted factors for composite numbers', () => {
    expect(factors(12)).toEqual([1, 2, 3, 4, 6, 12]);
    expect(factors(36)).toEqual([1, 2, 3, 4, 6, 9, 12, 18, 36]);
  });

  it('should handle negative numbers by taking absolute value', () => {
    expect(factors(-12)).toEqual([1, 2, 3, 4, 6, 12]);
  });
});
