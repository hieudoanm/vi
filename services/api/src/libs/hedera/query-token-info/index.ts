import { TokenInfo, TokenInfoQuery } from '@hashgraph/sdk';
import getClient from '../client';

export const queryTokenInfo = async (tokenId: string): Promise<TokenInfo> => {
  const client = getClient();

  const tokenInfoQuery: TokenInfoQuery = new TokenInfoQuery().setTokenId(
    tokenId
  );

  // Sign with the client operator private key, submit the query to the network and get the token supply
  const tokenInfo: TokenInfo = await tokenInfoQuery.execute(client);

  return tokenInfo;
};

export default queryTokenInfo;
