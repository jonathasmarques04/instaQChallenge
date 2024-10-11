import { UserInput } from '../../aplication';
import { User } from '../entity';

export interface UserRepository {
  create({ data }: UserInput): Promise<User>;
}
