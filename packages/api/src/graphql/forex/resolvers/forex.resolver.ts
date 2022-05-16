import { convertRates } from '../services/forex.service';
import { ForexRequest } from '../types';

export const resolvers = {
  Query: {
    rates: async (_: unknown, { amount = 1, base = 'VND' }: ForexRequest) => {
      return await convertRates({ amount, base });
    },
  },
};

export default resolvers;
