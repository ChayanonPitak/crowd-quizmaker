import { useEffect } from 'react'
import Router from 'next/router'

const Main = () => {
  useEffect(() => {
    Router.push('/main/contribute')
  })
}

export default Main
