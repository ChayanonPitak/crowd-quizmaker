import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'
import { haveToken, loadToken } from '../utils/storage'
import { UserProvider } from '../utils/UserContext'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
