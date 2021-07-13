import * as object from './index';

it('getEnumByValue', () => {
  const Enum = {
    KEY1: { value: 1, label: 'key1' },
    KEY2: { value: 2, label: 'key2' },
    KEY3: { value: 3, label: 'key3' },
  };
  const result = object.getEnumByValue(Enum, 2);
  expect(result).toBe(Enum.KEY2);
});

it('serializeToForm', () => {
  const json = {
    a: 'a',
    b: {
      c: {
        d: ['1', '2', '3'],
      },
    },
  };
  const result = object.serializeToForm(json);
  expect(result).toBe(encodeURI('a=a&b[c][d]=1&b[c][d]=2&b[c][d]=3'));
});

it('parseFormString', () => {
  const str = encodeURI('a=a&b=1&c=2&d=3');
  const result = object.parseFormString(str);
  expect(result.a).toBe('a');
  expect(result.b).toBe('1');
  expect(result.c).toBe('2');
  expect(result.d).toBe('3');
});
