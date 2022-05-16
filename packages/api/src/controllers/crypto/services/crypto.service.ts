import get from 'lodash/get';
import { axiosGet } from '../../../libs/axios';
import { Coin, CoinRankingResponse } from '../types';

export const getCoins = async (): Promise<{
  total: number;
  data: Array<Coin>;
}> => {
  const url = 'https://api.coinranking.com/v2/coins';
  const response: CoinRankingResponse = await axiosGet<CoinRankingResponse>(
    url
  );
  const status = get(response, 'status', '');
  if (status !== 'success') return { total: 0, data: [] };
  const data: Array<Coin> = get(response, 'data.coins', []);
  const total: number = data.length;
  return { total, data };
};
