import startServer from '../server';
import typeDefs from '../presentation/graphql/typeDefs';
import resolvers from '../presentation/graphql/users/resolvers';
import { prisma } from '../infra';

let server: any;

before(async () => {
  server = await startServer({ typeDefs, resolvers });
  console.log('Beginning the test...');
});

after(async () => {
  if (server) {
    await server.close();
  }

  await prisma.$disconnect();
});