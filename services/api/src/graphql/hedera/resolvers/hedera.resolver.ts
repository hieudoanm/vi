import {
  createAccount,
  getAccount,
  getBalance,
  topUp,
  transfer,
} from '../services/hedera.service';
import { TopUpRequest, TransferRequest } from '../types';

export const resolvers = {
  Query: {
    account: async (_: unknown, { email }: { email: string }) => {
      return getAccount(email);
    },
    balance: async (_: unknown, { email }: { email: string }) => {
      return getBalance(email);
    },
  },
  Mutation: {
    account: async (_: unknown, { email }: { email: string }) => {
      return createAccount(email);
    },
    topUp: async (_: unknown, { amount, email }: TopUpRequest) => {
      return topUp({ amount, email });
    },
    transfer: async (
      _: unknown,
      { amount, fromEmail, toEmail }: TransferRequest
    ) => {
      return transfer({ amount, fromEmail, toEmail });
    },
  },
};

export default resolvers;
