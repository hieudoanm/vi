const NODE_ENV = process.env.NODE_ENV || 'development';
const DEVELOPMENT_GRAPHQL_URI = 'http://localhost:8080/graphql';
const PRODUCTION_GRAPHQL_URI = 'https://hederawallet.herokuapp.com/graphql';
const FALLBACK_GRAPHQL_URI =
  NODE_ENV === 'development' ? DEVELOPMENT_GRAPHQL_URI : PRODUCTION_GRAPHQL_URI;

export const GRAPHQL_URI: string =
  process.env.GRAPHQL_URI || FALLBACK_GRAPHQL_URI;
