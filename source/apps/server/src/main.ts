import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './graphql/user.resolver'

const PORT = /*process.env.PORT ||*/ 3000

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  })

  const server = new ApolloServer({
    schema,
    introspection: true,
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })

  console.log(`Server ready at ${url}`)
}
bootstrap()
