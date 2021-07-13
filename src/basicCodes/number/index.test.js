import * as number from './index';

it('kComma', () => {
  expect(number.kComma(1000, 1)).toBe('1,000.0');
  expect(number.kComma(1000.133, 2)).toBe('1,000.13');
  expect(number.kComma(10020200, 0)).toBe('10,020,200');
  expect(number.kComma(100010020200.123, 3)).toBe('100,010,020,200.123');
  expect(() => {
    number.kComma(3232.5323, 4);
  }).toThrow('parameter digits must little than 4');
});

it('normal', () => {
  expect(number.percent(0.3423232)).toBe('34.23%');
  expect(() => {
    number.percent('34232');
  }).toThrow('parameter value must be a number');
});
