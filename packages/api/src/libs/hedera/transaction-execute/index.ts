import {
  Transaction,
  TransactionReceipt,
  TransactionResponse,
} from '@hashgraph/sdk';
import getClient from '../client';

export const execute = async (
  transaction: Transaction
): Promise<TransactionReceipt> => {
  const client = getClient();

  // SUBMIT THE TRANSACTION
  const transactionResponse: TransactionResponse = await transaction.execute(
    client
  );

  // GET THE RECEIPT OF THE TRANSACTION
  const transactionReceipt: TransactionReceipt =
    await transactionResponse.getReceipt(client);

  return transactionReceipt;
};

export default execute;
