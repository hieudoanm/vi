export type AccountType = {
  email: string;
  accountId: string;
  publicKey: string;
  privateKey: string;
};

export type Balance = {
  symbol?: string;
  name?: string;
  balance?: number;
};

export type Receipt = {
  accountId: string;
  tokenId: string;
  hbars: number;
  cents: number;
};

export type TopUpRequestBody = {
  amount: number;
  email: string;
  tokenId?: string;
};

export type TransferRequestBody = {
  amount: number;
  fromEmail: string;
  toEmail: string;
  tokenId?: string;
};
