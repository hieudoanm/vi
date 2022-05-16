export type Currency = {
  symbol: string;
  code: string;
  name: string;
  tokenId: string;
  tokenCode: string;
  tokenName: string;
  exponent: number;
};

export type FixerLatestResponse = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
};
