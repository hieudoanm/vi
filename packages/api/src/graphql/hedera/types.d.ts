export type Account = {
  email: string;
  accountId: string;
  publicKey: string;
  privateKey: string;
};

export type Balance = {
  symbol: string;
  name: string;
  balance: number;
};

export type Receipt = {
  accountId: string;
  tokenId: string;
  hbars: number;
  cents: number;
};

export type TopUpRequest = {
  amount: number;
  email: string;
};

export type TransferRequest = {
  amount: number;
  fromEmail: string;
  toEmail: string;
};
