import {
  PrivateKey,
  TokenCreateTransaction,
  TokenSupplyType,
  TokenType,
  TransactionResponse,
} from '@hashgraph/sdk';
import getClient from '../client';

export const createToken = async (
  { initialSupply, decimals }: { initialSupply: number; decimals: number },
  { tokenCode, tokenName }: { tokenCode: string; tokenName: string },
  {
    treasuryAccountId,
    treasuryPrivateKey,
  }: { treasuryAccountId: string; treasuryPrivateKey: string }
) => {
  const client = getClient();

  const privateKey = PrivateKey.fromStringED25519(treasuryPrivateKey);

  const tokenCreateTransaction = await new TokenCreateTransaction()
    .setTokenName(tokenName)
    .setTokenSymbol(tokenCode)
    .setTokenType(TokenType.FungibleCommon)
    .setDecimals(decimals)
    .setInitialSupply(initialSupply)
    .setTreasuryAccountId(treasuryAccountId)
    .setAdminKey(privateKey)
    .setSupplyType(TokenSupplyType.Infinite)
    .setSupplyKey(privateKey)
    .freezeWith(client);

  // SIGN WITH TREASURY KEY
  const tokenCreateSign = await tokenCreateTransaction.sign(privateKey);

  // SUBMIT THE TRANSACTION
  const transactionResponse: TransactionResponse =
    await tokenCreateSign.execute(client);

  // GET THE TRANSACTION RECEIPT
  const transactionReceipt = await transactionResponse.getReceipt(client);

  // GET THE TOKEN ID
  const tokenId = transactionReceipt.tokenId;

  return tokenId;
};
