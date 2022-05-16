export type Account = {
  username: string;
  accountId: string;
  publicKey: string;
  privateKey: string;
};

export type Currency = {
  symbol: string;
  name: string;
};

export type Balance = {
  name: string;
  symbol: string;
  balance: number;
};

export type User = {
  fullname: string;
  username: string;
  email: string;
  mobile: string;
  accountId: string;
  currency: string;
};
