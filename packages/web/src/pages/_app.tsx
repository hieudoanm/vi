import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import client from '../apollo';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ATOMIC</title>
      </Head>
      <UserProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </UserProvider>
    </>
  );
};

export default App;
