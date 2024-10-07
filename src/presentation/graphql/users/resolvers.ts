import { UserInput } from '../../../aplication';
import { prisma } from '../../../infra';

export default {
  Query: {
    users: () => prisma.user.findMany(),
    user: (id: string) =>
      prisma.user.findUnique({
        where: {
          id: id,
        },
      }),
  },
  Mutation: {
    createUser: async (_: any, { data }: UserInput) => {
      const { name, email, password, birthDate } = data;

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
          birthDate,
        },
      });
      return newUser;
    },
  },
};
