"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("@generated/type-graphql");
const client_1 = require("@prisma/client");
const PORT = 3000;
async function bootstrap() {
    const prisma = new client_1.PrismaClient();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: type_graphql_2.resolvers,
        dateScalarMode: 'isoDate',
        validate: false,
    });
    const server = new server_1.ApolloServer({
        schema,
        introspection: true,
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async () => ({ prisma }),
        listen: { port: 4000 },
    });
    console.log(`Server ready at ${url}`);
}
bootstrap();
//# sourceMappingURL=main.js.map