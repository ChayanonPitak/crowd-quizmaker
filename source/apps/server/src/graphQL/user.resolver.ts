import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql'
import { PrismaClient } from '@prisma/client'
//import { User } from './user.schema'

@ObjectType()
export class User {
  @Field()
  id: string

  @Field()
  username: string

  @Field()
  password: string

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
@Resolver()
export class UserResolver {
  @Query((returns) => User)
  async user(@Arg('id') id: string): Promise<User> {
    const prisma = new PrismaClient()

    const result = await prisma.user.findUnique({ where: { id } })

    await prisma.$disconnect()
    return result
  }
}
