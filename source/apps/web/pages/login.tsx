import { Button } from 'ui'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { haveToken, login, saveToken } from '../utils/storage'
import UserContext from '../utils/UserContext'
import UserProps from '../utils/UserProps'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [currentUser, setCurrentUser] = useContext(UserContext)

  const onLogin = async () => {
    console.log('username: ' + username)
    console.log('password: ' + password)

    try {
      const user: UserProps = await login(username, password)
      setCurrentUser(user)
    } catch (err) {}

    router.push('/main/workspace')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 -mt-16">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Log in</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Username
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="transition duration-200 bg-neutral-500 hover:bg-neutral-600 focus:bg-neutral-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              onClick={() => onLogin()}
            >
              <span className="inline-block mr-2">Login</span>
            </button>
          </div>
          <div className="py-5 text-center">
            Need an account?{' '}
            <span className="font-semibold">
              <Link href="/signup">SIGN UP</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
