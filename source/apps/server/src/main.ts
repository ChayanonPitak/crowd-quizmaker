import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchema } from 'type-graphql'
import { resolvers } from '@generated/type-graphql'
import { PrismaClient } from '@prisma/client'

const PORT = /*process.env.PORT ||*/ 3000

async function bootstrap() {
  const prisma = new PrismaClient()
  const schema = await buildSchema({
    resolvers,
    dateScalarMode: 'isoDate',
    validate: false,
  })

  const server = new ApolloServer({
    schema,
    introspection: true,
  })

  const { url } = await startStandaloneServer(server, {
    context: async () => ({ prisma }),
    listen: { port: 4000 },
  })

  console.log(`Server ready at ${url}`)
}
bootstrap()
