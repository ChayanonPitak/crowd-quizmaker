"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const type_graphql_1 = require("type-graphql");
const user_resolver_1 = require("./graphql/user.resolver");
const PORT = process.env.PORT || 3000;
async function bootstrap() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [user_resolver_1.UserResolver],
    });
    const server = new server_1.ApolloServer({
        schema,
        introspection: true,
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
    });
    console.log(`Server ready at ${url}`);
}
bootstrap();
//# sourceMappingURL=main.js.map