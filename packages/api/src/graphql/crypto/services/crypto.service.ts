import get from 'lodash/get';
import { API } from '../../../configs';
import { axiosGet } from '../../../libs/axios';
import { Coin } from '../types';

export const getCoins = async (): Promise<Coin[]> => {
  const url = `${API}/crypto/coins`;
  const data = await axiosGet<{ data: Coin[] }>(url);
  return get(data, 'data', []) as Coin[];
};
