import {
  ApolloClient,
  ApolloQueryResult,
  DocumentNode,
  FetchResult,
  InMemoryCache,
} from '@apollo/client';
import get from 'lodash/get';
import { GRAPHQL_URI } from '../configs';

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export const query = async <T>(
  queryDocumentNode: DocumentNode,
  variables: Record<string, any> = {}
): Promise<T | {}> => {
  const result: ApolloQueryResult<T> = await client.query<T>({
    query: queryDocumentNode,
    variables,
  });
  const data: T | {} = get(result, 'data', {});
  return data;
};

export const mutate = async <T>(
  mutationDocumentNode: DocumentNode,
  variables: Record<string, any> = {}
): Promise<T | {}> => {
  const result: FetchResult<T> = await client.mutate<T>({
    mutation: mutationDocumentNode,
    variables,
  });
  const data: T | {} = get(result, 'data', {}) || {};
  return data;
};

export default client;
