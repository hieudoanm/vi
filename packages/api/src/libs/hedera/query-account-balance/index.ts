import { AccountBalance, AccountBalanceQuery } from '@hashgraph/sdk';
import { VND_TOKEN_ID } from '../../../configs';
import getClient from '../client';

export const queryAccountBalance = async (
  accountId: string,
  tokenId: string = VND_TOKEN_ID
): Promise<AccountBalance> => {
  const client = getClient();

  const accountBalance: AccountBalance = await new AccountBalanceQuery()
    .setAccountId(accountId)
    .execute(client);

  console.log(
    `${accountId}: ${accountBalance.tokens?._map.get(
      tokenId
    )} units of token ID ${tokenId}`
  );

  return accountBalance;
};

export default queryAccountBalance;
