import {
  PrivateKey,
  Transaction,
  TransactionReceipt,
  TransferTransaction,
} from '@hashgraph/sdk';
import { VND_TOKEN_ID } from '../../../configs';
import { AccountType } from '../../../controllers/hedera/types';
import queryAccountBalance from '../query-account-balance';
import getClient from '../client';
import execute from '../transaction-execute';

export const transferToken = async (
  amount: number,
  {
    accountId: fromAccountId,
    privateKey,
  }: Pick<AccountType, 'accountId' | 'privateKey'>,
  { accountId: toAccountId }: Pick<AccountType, 'accountId'>,
  tokenId = VND_TOKEN_ID
): Promise<TransactionReceipt> => {
  const client = getClient();

  // BALANCE CHECK
  queryAccountBalance(fromAccountId, tokenId);
  queryAccountBalance(toAccountId, tokenId);

  // TRANSFER STABLECOIN FROM fromAccountId TO toAccountId
  const transaction: Transaction = await new TransferTransaction()
    .addTokenTransfer(tokenId, fromAccountId, -1 * amount)
    .addTokenTransfer(tokenId, toAccountId, amount)
    .freezeWith(client)
    .sign(PrivateKey.fromStringED25519(privateKey));

  // EXECUTE
  const receipt: TransactionReceipt = await execute(transaction);

  // BALANCE CHECK
  queryAccountBalance(fromAccountId, tokenId);
  queryAccountBalance(toAccountId, tokenId);

  return receipt;
};

export default transferToken;
