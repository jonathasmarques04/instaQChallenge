import axios from 'axios';
import { expect } from 'chai';
import startServer from '../server';
import typeDefs from '../presentation/graphql/typeDefs';
import resolvers from '../presentation/graphql/users/resolvers';

let server: any;

before(async () => {
  server = await startServer({ typeDefs, resolvers });
  console.log("Server started...");
});

after(async () => {
  if (server) {
    await server.close();
  }
});

describe('API Test', () => {
  it('should execute a users query', async () => {
    const response = await axios.post('http://localhost:4000/', {
      query: `
        query {
          users {
            name
          }
        }
      `,
    });
    console.log(response.data);
    expect(response.status).to.equal(200);
  });
});