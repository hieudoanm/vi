import { gql } from 'apollo-server-express';
import merge from 'lodash/merge';
import {
  resolvers as cryptoResolvers,
  schemas as cryptoSchemas,
} from './crypto';
import { resolvers as forexResolvers, schemas as forexSchemas } from './forex';
import {
  resolvers as hederaResolvers,
  schemas as hederaSchemas,
} from './hedera';

const globalsSchemas = gql`
  type Query
  type Mutation
`;

export const typeDefs = [
  globalsSchemas,
  cryptoSchemas,
  hederaSchemas,
  forexSchemas,
];

export const resolvers = merge(
  cryptoResolvers,
  hederaResolvers,
  forexResolvers
);
