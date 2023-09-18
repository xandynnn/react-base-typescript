import { describe, test, expect } from 'vitest';
import { Sum } from './Sum';

describe('Sum', () => {
  test('Should be return sum of 2 and 3', () => {
    const values = {
      x: 2,
      y: 3,
    };
    const assert = 5;

    const result = Sum(values.x, values.y);
    expect(result).toEqual(assert);
  });
});
