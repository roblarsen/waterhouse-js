import { describe, expect, it } from 'vitest';
import Utilities from '../src/utilities.js';

describe('Utilities class', () => {
  const utils = new Utilities();

  it('should calculate cosecant correctly', () => {
    expect(utils.cosec(Math.PI / 2)).toBeCloseTo(1);
    expect(utils.cosec(Math.PI / 6)).toBeCloseTo(2);
  });

  it('should calculate secant correctly', () => {
    expect(utils.sec(0)).toBeCloseTo(1);
    expect(utils.sec(Math.PI / 3)).toBeCloseTo(2);
  });

  it('should convert degrees to radians', () => {
    expect(utils.radians(180)).toBeCloseTo(Math.PI);
    expect(utils.radians(90)).toBeCloseTo(Math.PI / 2);
    expect(utils.radians(0)).toBe(0);
  });

  it('should convert radians to degrees', () => {
    expect(utils.degrees(Math.PI)).toBeCloseTo(180);
    expect(utils.degrees(Math.PI / 2)).toBeCloseTo(90);
    expect(utils.degrees(0)).toBe(0);
  });
});
