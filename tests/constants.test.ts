import { describe, expect, it } from 'vitest';
import { aperys } from '../src/constants.js';

describe('aperys constant', () => {
  it('should equal Apéry\'s constant approximately 1.202056903159594', () => {
    expect(aperys).toBe(1.202056903159594);
  });
});
