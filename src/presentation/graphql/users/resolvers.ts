import { UserInput } from '../../../aplication';
import { prisma } from '../../../infra';
import { PrismaUserRepository } from '../../../infra/repositories';
import { CreateUserUseCase } from '../../../aplication/use-cases/createUserUseCase';

const prismaUserRepository = new PrismaUserRepository();
const createUserUseCase = new CreateUserUseCase(prismaUserRepository);

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
      return await createUserUseCase.execute({ data });
    },
  },
};
