import currency, { CurrencyEnum } from '.';

describe('currency', () => {
  it('should format AUD', () => {
    const result = currency(10, CurrencyEnum.AUD);
    expect(result).toEqual('$10.00');
  });
});
