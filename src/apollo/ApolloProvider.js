import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const ApolloContainer = ({ children }) => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
          uri: 'http://localhost:4000',
        })
      });

    return <ApolloProvider client={client}>
        { children }
    </ApolloProvider>
}

export default ApolloContainer;