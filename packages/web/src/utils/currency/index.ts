import isNil from 'lodash/isNil';

export enum CurrencyEnum {
  AUD = 'AUD',
  CAD = 'CAD',
  CHF = 'CHF',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  SGD = 'SGD',
  USD = 'USD',
  VND = 'VND',
}

const currencyLocaleMap: Record<
  CurrencyEnum,
  { locale: string; minimumFractionDigits: number }
> = {
  AUD: { locale: 'en-AU', minimumFractionDigits: 2 },
  CAD: { locale: 'en-CA', minimumFractionDigits: 2 },
  CHF: { locale: 'de-CH', minimumFractionDigits: 2 },
  EUR: { locale: 'en-GB', minimumFractionDigits: 2 },
  GBP: { locale: 'en-GB', minimumFractionDigits: 2 },
  JPY: { locale: 'ja-JP', minimumFractionDigits: 0 },
  SGD: { locale: 'zh-SG', minimumFractionDigits: 2 },
  USD: { locale: 'en-US', minimumFractionDigits: 2 },
  VND: { locale: 'vi-VN', minimumFractionDigits: 0 },
};

export const currency = (
  number: number,
  currency: CurrencyEnum = CurrencyEnum.VND
) => {
  if (
    isNil(number) ||
    (typeof number !== 'number' && typeof number !== 'bigint')
  ) {
    return '';
  }

  const { locale, minimumFractionDigits } = currencyLocaleMap[currency];

  return new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    minimumFractionDigits,
  }).format(number);
};

export default currency;
