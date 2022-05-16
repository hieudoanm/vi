import { gql } from 'apollo-server-express';

export const schemas = gql`
  extend type Query {
    coins: [Coin]
  }

  type Coin {
    uuid: String
    symbol: String
    name: String
    color: String
    iconUrl: String
    marketCap: String
    price: String
    listedAt: Int
    tier: Int
    change: String
    rank: Int
    sparkline: [String]
    coinrankingUrl: String
    btcPrice: String
    lowVolume: Boolean
  }
`;

export default schemas;
