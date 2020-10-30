import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./src/graphql/resolvers";
const server = new GraphQLServer({
  typeDefs: "./src/graphql/schema.graphql",
  resolvers: resolvers,
});

server.start(() => console.log("Graphql Server Running"));
