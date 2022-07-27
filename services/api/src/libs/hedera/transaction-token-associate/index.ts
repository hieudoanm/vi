import {
  PrivateKey,
  TokenAssociateTransaction,
  Transaction,
  TransactionReceipt,
} from '@hashgraph/sdk';
import getClient from '../client';
import execute from '../transaction-execute';

export const associateToken = async ({
  accountId,
  privateKey,
  tokenId,
}: {
  accountId: string;
  privateKey: string;
  tokenId: string;
}): Promise<TransactionReceipt> => {
  const client = getClient();

  const transaction: Transaction = await new TokenAssociateTransaction()
    .setAccountId(accountId)
    .setTokenIds([tokenId])
    .freezeWith(client)
    .sign(PrivateKey.fromStringED25519(privateKey));

  // EXECUTE
  const receipt: TransactionReceipt = await execute(transaction);

  return receipt;
};

export default associateToken;
