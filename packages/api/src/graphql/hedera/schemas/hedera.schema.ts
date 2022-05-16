import { gql } from 'apollo-server-express';

export const schemas = gql`
  extend type Query {
    account(email: String!): Account
    balance(email: String!): Balance
  }

  extend type Mutation {
    account(email: String!): Account
    topUp(amount: Float!, email: String!): Receipt
    transfer(amount: Float!, fromEmail: String!, toEmail: String!): Receipt
  }

  type Account {
    email: String
    accountId: String
    publicKey: String
    privateKey: String
  }

  type Balance {
    symbol: String
    name: String
    balance: Int
  }

  type Receipt {
    accountId: String
    tokenId: String
    hbars: Float
    cents: Float
  }
`;
