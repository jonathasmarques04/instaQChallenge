import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { User, UserInput } from "./aplication";

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
      id:  Math.floor(Math.random() * 1000),
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