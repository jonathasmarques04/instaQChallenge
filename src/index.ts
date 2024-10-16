import * as dotenv from 'dotenv';

import typeDefs from "./presentation/graphql/typeDefs";
import resolvers from "./presentation/graphql/users/resolvers";
import startServer from "./server";

dotenv.config()

startServer({ typeDefs, resolvers })