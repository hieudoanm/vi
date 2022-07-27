import { DocumentNode, gql } from '@apollo/client';

export const MUTATION_SIGN_IN: DocumentNode = gql`
  mutation SIGN_IN($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      token
    }
  }
`;

export const MUTATION_SIGN_UP: DocumentNode = gql`
  mutation SIGN_UP($email: String!, $mobile: String!, $password: String!) {
    signIn(email: $email, mobile: $mobile, password: $password) {
      token
    }
  }
`;

export const GET_BALANCE: DocumentNode = gql`
  query GET_BALANCE($email: String!) {
    balance(email: $email) {
      name
      symbol
      balance
    }
  }
`;

export const GET_RATES: DocumentNode = gql`
  query GET_RATES($amount: Float!, $base: String!) {
    rates(amount: $amount, base: $base) {
      symbol
      rate
    }
  }
`;

export const GET_USER: DocumentNode = gql`
  query GET_USER {
    user {
      fullname
      username
      email
      mobile
      accountId
      currency
    }
  }
`;

export const UPDATE_USER: DocumentNode = gql`
  mutation UPDATE_USER(
    $fullname: String!
    $username: String!
    $email: String!
    $mobile: String!
    $currency: String!
  ) {
    user(
      fullname: $fullname
      username: $username
      email: $email
      mobile: $mobile
      currency: $currency
    ) {
      fullname
      username
      email
      mobile
      accountId
      currency
    }
  }
`;
