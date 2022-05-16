import { AccountBalance, TransactionReceipt } from '@hashgraph/sdk';
import {
  VND_TOKEN_ID,
  TREASURY_ACCOUNT_ID,
  TREASURY_PRIVATE_KEY,
} from '../../../configs';
import { queryAccountBalance, transferToken } from '../../../libs/hedera';
import { createAccount } from '../../../libs/hedera/transaction-create-account';
import getTokenInfo from '../../../libs/hedera/query-token-info';
import { AccountModel } from '../models';
import {
  AccountType,
  Balance,
  Receipt,
  TopUpRequestBody,
  TransferRequestBody,
} from '../types';

export const getAccount = async (
  email: string
): Promise<{ account: AccountType }> => {
  const account: AccountType = (await AccountModel.findOne<AccountType>(
    { email },
    { _id: 0, __v: 0 }
  )) as AccountType;
  return { account };
};

export const postAccount = async (
  email: string
): Promise<{ account: AccountType | null }> => {
  const { accountId, publicKey, privateKey } = await createAccount();
  const account: AccountType | null =
    await AccountModel.findOneAndUpdate<AccountType>(
      { email },
      { email, accountId, publicKey, privateKey },
      { new: true }
    );

  return { account };
};

export const getBalance = async (
  email: string
): Promise<{ balance: Balance }> => {
  if (!email) return { balance: {} };

  const account: AccountType | null = await AccountModel.findOne<AccountType>(
    { email },
    { _id: 0, __v: 0 }
  );

  if (!account) return { balance: {} };

  const accountBalance: AccountBalance = await queryAccountBalance(
    account.accountId,
    VND_TOKEN_ID
  );
  const token = await getTokenInfo(VND_TOKEN_ID);
  const { symbol, name } = token;
  const balance = accountBalance.tokens?._map.get(VND_TOKEN_ID)?.toNumber();
  return { balance: { symbol, name, balance } };
};

export const postTransfer = async ({
  amount,
  fromEmail,
  toEmail,
  tokenId = VND_TOKEN_ID,
}: TransferRequestBody): Promise<{ receipt: Receipt }> => {
  const { account: fromAccount } = await getAccount(fromEmail);
  const { account: toAccount } = await getAccount(toEmail);
  const receipt: TransactionReceipt = await transferToken(
    amount,
    fromAccount,
    toAccount,
    tokenId
  );

  const accountId: string = receipt.accountId?.toString() || '';
  const _tokenId: string = receipt.tokenId?.toString() || '';
  const hbars: number = receipt.exchangeRate?.hbars || 0;
  const cents: number = receipt.exchangeRate?.cents || 0;

  return { receipt: { accountId, tokenId: _tokenId, hbars, cents } };
};

export const topUp = async ({
  amount,
  email,
  tokenId,
}: TopUpRequestBody): Promise<{ receipt: Receipt }> => {
  const { account } = await getAccount(email);
  const receipt: TransactionReceipt = await transferToken(
    amount,
    { accountId: TREASURY_ACCOUNT_ID, privateKey: TREASURY_PRIVATE_KEY },
    account,
    tokenId
  );

  const accountId: string = receipt.accountId?.toString() || '';
  const _tokenId: string = receipt.tokenId?.toString() || '';
  const hbars: number = receipt.exchangeRate?.hbars || 0;
  const cents: number = receipt.exchangeRate?.cents || 0;

  return { receipt: { accountId, tokenId: _tokenId, hbars, cents } };
};

export const getToken = async (tokenId: string) => {
  const token = await getTokenInfo(tokenId);
  return { token };
};
