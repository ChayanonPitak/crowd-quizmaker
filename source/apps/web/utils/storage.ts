import UserProps from './UserProps'

export const loadToken = () => {
  return localStorage.getItem('token')
}

export const saveToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const haveToken = () => {
  if (localStorage.getItem('token') === null) {
    return false
  } else {
    return true
  }
}

export const clearToken = () => {
  localStorage.removeItem('token')
}

export const login = async (username: string, password: string) => {
  const user: UserProps = { username: username, token: 'abc' }
  localStorage.setItem('user', JSON.stringify(user))
  return user
}

export const logout = async () => {
  clearToken()
  clearUser()
}

export const isAuthenticated = () => {
  const user = localStorage.getItem('user')
  if (!user) {
    return null
  }
  return JSON.parse(user)
}

export const loadUsername = () => {
  return localStorage.getItem('username')
}

export const saveUsername = (username: string) => {
  localStorage.setItem('username', username)
}

export const clearUser = () => {
  localStorage.removeItem('user')
}
