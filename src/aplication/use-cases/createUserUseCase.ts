import { User, UserRepository } from '../../domain';
import { UserInput } from '../interfaces';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ data }: UserInput): Promise<User> {
    const createUser = await this.userRepository.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        birthDate: data.birthDate,
      },
    });
    return createUser;
  }
}
