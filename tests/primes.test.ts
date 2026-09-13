import { describe, expect, it } from 'vitest';
import { isPrime } from '../src/primes.js';

describe('isPrime', () => {
  it('should return false for numbers less than 2 or non-integers', () => {
    expect(isPrime(-5)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2.5)).toBe(false);
  });

  it('should return true for 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('should return false for even numbers greater than 2', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  it('should identify prime numbers correctly', () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  it('should identify non-prime odd numbers correctly', () => {
    expect(isPrime(9)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(25)).toBe(false);
    expect(isPrime(99)).toBe(false);
  });
});
