import { getCoins } from '../services/crypto.service';

export const resolvers = {
  Query: {
    coins: async () => {
      return await getCoins();
    },
  },
};

export default resolvers;
