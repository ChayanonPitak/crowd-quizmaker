import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchema, Resolver, Query} from 'type-graphql'
import { resolvers as generatedResolvers } from '@generated/type-graphql'
import { PrismaClient, Question } from '@prisma/client'
import { CustomUserResolver } from './resolvers'

const PORT = /*process.env.PORT ||*/ 3000

async function bootstrap() {
  const prisma = new PrismaClient()

  const schema = await buildSchema({
    resolvers: [...generatedResolvers, CustomUserResolver],
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
