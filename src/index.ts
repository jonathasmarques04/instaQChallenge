import typeDefs from "./presentation/graphql/typeDefs";
import resolvers from "./presentation/graphql/users/resolvers";
import startServer from "./server";

startServer({ typeDefs, resolvers })