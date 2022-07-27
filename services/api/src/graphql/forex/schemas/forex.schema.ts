import { gql } from 'apollo-server-express';

export const schemas = gql`
  extend type Query {
    rates(amount: Float!, base: String!): [Rate]
  }

  type Rate {
    rate: Float
    symbol: String
  }
`;

export default schemas;
