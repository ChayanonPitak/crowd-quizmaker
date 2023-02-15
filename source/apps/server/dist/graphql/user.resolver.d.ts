export declare class User {
  id: string
  username: string
  password: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}
export declare class UserResolver {
  user(id: string): Promise<User>
}
