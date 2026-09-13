import { describe, expect, it } from 'vitest';
import { generateTriangleNumbers, triangle } from '../src/triangle-numbes.js';

describe('triangle numbers', () => {
  describe('triangle', () => {
    it('should calculate the nth triangle number correctly', () => {
      expect(triangle(1)).toBe(1);
      expect(triangle(2)).toBe(3);
      expect(triangle(3)).toBe(6);
      expect(triangle(4)).toBe(10);
      expect(triangle(5)).toBe(15);
    });
  });

  describe('generateTriangleNumbers', () => {
    it('should generate a sequence of triangle numbers up to n', () => {
      expect(generateTriangleNumbers(0)).toEqual([]);
      expect(generateTriangleNumbers(1)).toEqual([1]);
      expect(generateTriangleNumbers(5)).toEqual([1, 3, 6, 10, 15]);
    });
  });
});
