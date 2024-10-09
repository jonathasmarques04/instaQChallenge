import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

export default function startServer({ typeDefs, resolvers }: any) {
  const server = new ApolloServer({ typeDefs, resolvers });
  startStandaloneServer(server).then(({ url }) => {
    console.log(`Server is runing at ${url}`);
  });
}
