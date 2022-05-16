import get from 'lodash/get';
import { API } from '../../../configs';
import { axiosGet } from '../../../libs/axios';
import { ForexRequest, ForexResponse, Rate } from '../types';

export const getRates = async ({
  amount,
  base,
}: ForexRequest): Promise<Array<Rate>> => {
  const url = `${API}/forex/rates?amount=${amount}&base=${base}`;
  const data: ForexResponse = await axiosGet<ForexResponse>(url);
  return get(data, 'rates', []) as Array<Rate>;
};

export const convertRates = async ({
  amount,
  base,
}: ForexRequest): Promise<Array<Rate>> => {
  const url = `${API}/forex/convert?amount=${amount}&base=${base}`;
  const data: ForexResponse = await axiosGet<ForexResponse>(url);
  return get(data, 'rates', []) as Array<Rate>;
};
