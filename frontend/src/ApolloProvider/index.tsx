// src/ApolloProvider.tsx
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider as ApolloHooksProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const ApolloProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ApolloHooksProvider client={client}>
    {children}
  </ApolloHooksProvider>
);

export default ApolloProvider;
