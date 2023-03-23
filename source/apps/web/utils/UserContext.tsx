import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Login from '../pages/login'
import Main from '../pages/main'
import { haveToken, isAuthenticated } from './storage'
import UserProps from './UserProps'

const UserContext = createContext<
  [currentUser: UserProps | null, setCurrentUser: Function]
>([null, () => undefined])

type UserProviderProps = {
  children: React.ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser: UserProps = isAuthenticated()
      console.log(cuser)
      if (cuser === null) {
        localStorage.setItem('user', '')
      }
      setCurrentUser(cuser)
    }

    checkLoggedIn()
  }, [])

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
