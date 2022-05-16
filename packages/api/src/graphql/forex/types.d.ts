export type Rate = { symbol: string; rate: number };

export type ForexRequest = { amount: number; base: string };

export type ForexResponse = { rates: Rate[] };
