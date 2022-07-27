import {
  AccountCreateTransaction,
  AccountId,
  Hbar,
  PrivateKey,
  Transaction,
} from '@hashgraph/sdk';
import get from 'lodash/get';
import execute from '../transaction-execute';

export const createAccount = async (): Promise<{
  accountId: string;
  privateKey: string;
  publicKey: string;
}> => {
  const privateKey = await PrivateKey.generateED25519();
  const { publicKey } = privateKey;

  const transaction: Transaction = await new AccountCreateTransaction()
    .setKey(publicKey)
    .setInitialBalance(Hbar.fromTinybars(0));
  const receipt = execute(transaction);

  const accountId: AccountId | string = get(receipt, 'accountId', '') || '';
  return {
    accountId: accountId.toString(),
    privateKey: privateKey.toStringRaw(),
    publicKey: publicKey.toStringRaw(),
  };
};

export default createAccount;
