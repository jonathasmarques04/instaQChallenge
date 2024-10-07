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

      if (password.length < 6 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
        throw new Error('A senha deve ter pelo menos 6 caracteres, incluindo pelo menos uma letra e um dígito.');
      }

      const emailVerify = await prisma.user.findFirst({
        where: {
            email: email
        }
      })

      if(emailVerify){
        throw new Error("Email already exists")
      }

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
