import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootValue = {
  hello: () => 'Hello world!',
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true, // Interface que vem do graphQL
}));

// Porta do servidor
app.listen(4000, () => {
  console.log('Servidor GraphQL rodando em http://localhost:4000/graphql');
});