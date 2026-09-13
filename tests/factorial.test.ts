import { describe, expect, it } from 'vitest';
import factorial from '../src/factorial.js';

describe('factorial', () => {
  it('should calculate factorial for numbers', () => {
    expect(factorial(0)).toBe(1n);
    expect(factorial(1)).toBe(1n);
    expect(factorial(5)).toBe(120n);
    expect(factorial(10)).toBe(3628800n);
  });

  it('should calculate factorial for bigints', () => {
    expect(factorial(0n)).toBe(1n);
    expect(factorial(1n)).toBe(1n);
    expect(factorial(5n)).toBe(120n);
    expect(factorial(20n)).toBe(2432902008176640000n);
  });
});
