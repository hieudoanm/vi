import { get } from 'lodash';
import { API } from '../../../configs';
import { axiosGet, axiosPost } from '../../../libs/axios';
import logger from '../../../libs/logger';
import {
  Account,
  Balance,
  Receipt,
  TopUpRequest,
  TransferRequest,
} from '../types';

export const getAccount = async (email: string): Promise<Account> => {
  const url = `${API}/hedera/account?email=${email}`;
  logger.info({ url }, `getAccount() url`);
  const response = await axiosGet<{ account: Account }>(url);
  return get(response, 'account', {}) as Account;
};

export const createAccount = async (email: string): Promise<Account> => {
  const url = `${API}/hedera/account?email=${email}`;
  const response = await axiosPost<{ account: Account }, { email: string }>(
    url,
    { email }
  );
  return get(response, 'account', {}) as Account;
};

export const getBalance = async (email: string): Promise<Balance> => {
  const url = `${API}/hedera/balance?email=${email}`;
  logger.info({ url }, `getBalance() url`);
  const response = await axiosGet<{ balance: Balance }>(url);
  return get(response, 'balance', {}) as Balance;
};

export const topUp = async ({
  amount,
  email,
}: TopUpRequest): Promise<Receipt> => {
  const url = `${API}/hedera/top-up`;
  logger.info({ url }, `topUp() url`);
  const response = await axiosPost<{ receipt: Receipt }, TopUpRequest>(url, {
    amount,
    email,
  });
  console.log(get(response, 'receipt', {}));
  return get(response, 'receipt', {}) as Receipt;
};

export const transfer = async ({
  amount,
  fromEmail,
  toEmail,
}: TransferRequest): Promise<Receipt> => {
  const url = `${API}/hedera/transfer`;
  logger.info({ url }, `transfer() url`);
  const response = await axiosPost<{ receipt: Receipt }, TransferRequest>(url, {
    amount,
    fromEmail,
    toEmail,
  });
  console.log(get(response, 'receipt', {}));
  return get(response, 'receipt', {}) as Receipt;
};
