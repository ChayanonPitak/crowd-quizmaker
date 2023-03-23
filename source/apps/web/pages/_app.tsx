import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'
import { haveToken, loadToken } from '../utils/storage'
import { UserProvider } from '../utils/UserContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
