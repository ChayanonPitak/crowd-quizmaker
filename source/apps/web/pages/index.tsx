import { Button } from 'ui'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Login from './login'
import { Router, useRouter } from 'next/router'
import { haveToken, isAuthenticated } from '../utils/storage'
import MainWorkspace from './main/workspace'

const App = () => {
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/main')
    } else {
      router.push('/login')
    }
  }, [])

  return <></>
}

export default App
