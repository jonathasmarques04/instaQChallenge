import bcrypt from "bcrypt"

import { UserInput } from '../../aplication';
import { User, UserRepository } from '../../domain';
import { prisma } from '../db';

export class PrismaUserRepository implements UserRepository {
  async create({ data } : UserInput): Promise<User> {

    const emailVerify = await prisma.user.findFirst({
        where: {
            email: data.email
        }
      })

      if(emailVerify){
        throw new Error("O email já existe")
      }

      const saltRound = 10
      const passwordHashed = await bcrypt.hash(data.password, saltRound)

    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: passwordHashed,
        birthDate: data.birthDate,
      },
    });
    return new User(newUser)
  }
}
