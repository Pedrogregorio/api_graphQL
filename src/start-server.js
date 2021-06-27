import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

function stratServer({typeDefs, resolvers}) {
  mongoose.connect("mongodb://localhost:27017/graphql", {

  })

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Server strated at ${url}`));
}

export default stratServer;