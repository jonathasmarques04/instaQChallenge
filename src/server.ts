import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

interface UserInput {
  name: string;
  email: string;
  password: string;
  birthDate: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  birthDate: string;
}

const typeDefs = `#graphql
  type Query {
    hello: String
  }

  type User {
    id: ID!
    name: String! 
    email: String!
    birthDate: String!
  }

  input UserInput {
    name: String! 
    email: String!
    password: String!
    birthDate: String!
  }

  type Mutation {
    createUser(data: UserInput!): User!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
  Mutation: {
    createUser: (_: any,{ data }: {data: UserInput}): User => ({
      id:  Math.floor(Math.random() * 1000), // Simula um id
      name: data.name,
      email: data.email,
      birthDate: data.birthDate
    })
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});