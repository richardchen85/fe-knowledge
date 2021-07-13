import * as string from './index';

it('formatMobile', () => {
  expect(string.formatMobile('13550008294')).toBe('135 5000 8294');
});
