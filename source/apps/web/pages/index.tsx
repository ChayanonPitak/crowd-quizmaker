import { Button } from 'ui'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Login from './login'
import { useRouter } from 'next/router'

const App = () => {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login')
    } else {
      router.push('/main')
    }
  }, [])

  return <></>
}

export default App
