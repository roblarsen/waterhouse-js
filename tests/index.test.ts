import { describe, expect, it } from 'vitest';
import {
  aperys,
  collatz,
  factorial,
  factors,
  generateTriangleNumbers,
  isPrime,
  triangle,
  Utilities,
} from '../src/index.js';

describe('index entrypoint exports', () => {
  it('should export all public API members', () => {
    expect(aperys).toBeDefined();
    expect(typeof collatz).toBe('function');
    expect(typeof factorial).toBe('function');
    expect(typeof factors).toBe('function');
    expect(typeof generateTriangleNumbers).toBe('function');
    expect(typeof isPrime).toBe('function');
    expect(typeof triangle).toBe('function');
    expect(typeof Utilities).toBe('function');
  });
});
