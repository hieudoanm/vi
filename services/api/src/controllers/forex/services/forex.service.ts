import get from 'lodash/get';
import { FIXER_ACCESS_KEY } from '../../../configs';
import { axiosGet } from '../../../libs/axios';
import logger from '../../../libs/logger';
import { getClient } from '../../../libs/redis';
import { currencies } from '../../../constants';
import { FixerLatestResponse } from '../types';

export type Rate = {
  symbol: string;
  rate: number;
};

const getRedisCache = async <T>(key: string): Promise<T | undefined> => {
  const redisClient = await getClient();
  const cacheString: string = (await redisClient.get(key)) || '';
  if (cacheString === '') return;

  try {
    const cache: T = JSON.parse(cacheString);
    logger.info(`Get ${key} from Redis Cache`);
    return cache;
  } catch (error: unknown) {
    logger.error(error);
    return;
  }
};

const getFixerAPI = async (symbols: string) => {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('base', 'EUR');
  urlSearchParams.set('format', '1');
  urlSearchParams.set('symbols', symbols);
  urlSearchParams.set('access_key', FIXER_ACCESS_KEY);
  const url = `http://data.fixer.io/api/latest?${urlSearchParams.toString()}`;
  const data: FixerLatestResponse = await axiosGet<FixerLatestResponse>(url, {
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  });
  const success: boolean = get(data, 'success');
  if (!success) return {};
  const base: string = get(data, 'base', '');
  if (!base) return {};
  const rates: Record<string, number> = get(data, 'rates', {});
  return rates;
};

const getFixerRates = async (): Promise<Record<string, number>> => {
  const cacheRates: Record<string, number> | undefined = await getRedisCache<
    Record<string, number>
  >('fixer-rates');
  if (cacheRates !== undefined) {
    return cacheRates;
  }

  const symbols: string = currencies.map((currency) => currency.code).join(',');
  const rates = await getFixerAPI(symbols);

  const ratesString = JSON.stringify(rates);
  const redisClient = await getClient();
  const response = await redisClient.set('fixer-rates', ratesString);
  logger.info(response, `getFixerRates redisClient.set`);

  return rates;
};

export const getRates = async ({
  amount = 1,
  base = 'VND',
}: {
  amount: number;
  base: string;
}): Promise<Array<Rate>> => {
  const rates = await getFixerRates();
  const keys = Object.keys(rates);
  const queryRates: Array<Rate> = [];
  for (const key of keys) {
    const rate: number = (amount * rates[key]) / rates[base];
    const queryRate: Rate = { symbol: key, rate };
    queryRates.push(queryRate);
  }
  return queryRates;
};

export const convertRates = async ({
  amount = 1,
  base = 'VND',
}: {
  amount: number;
  base: string;
}): Promise<Array<Rate>> => {
  const rates: Record<string, number> = await getFixerRates();
  const keys = Object.keys(rates);
  const queryRates: Array<Rate> = [];
  for (const key of keys) {
    const rate: number = (amount * rates[base]) / rates[key];
    const roundedRate: number = Math.round(rate);
    const queryRate: Rate = { symbol: key, rate: roundedRate };
    queryRates.push(queryRate);
  }
  return queryRates;
};
