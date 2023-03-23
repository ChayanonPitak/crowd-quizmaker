import UserProps from './UserProps'

export const login = async (
  username: string,
  password: string
): Promise<UserProps | null> => {
  console.log(username)
  return await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query Query($where: UserWhereInput) {
          findFirstUser(where: $where) {
            id
            name
            username
          }
        }
      `,
      variables: {
        where: {
          AND: [
            { username: { equals: username } },
            { password: { equals: password } },
          ],
        },
      },
    }),
  })
    .then((res) => res.json())
    .then((result) => result.data.findFirstUser)
    .then((user) => {
      if (user) localStorage.setItem('user', JSON.stringify(user))
      return user
    })
}

export const logout = async () => {
  clearUser()
}

export const isAuthenticated = (): UserProps | null => {
  const user = localStorage.getItem('user')
  if (!user) {
    return null
  }
  return JSON.parse(user)
}

export const clearUser = () => {
  localStorage.removeItem('user')
}
