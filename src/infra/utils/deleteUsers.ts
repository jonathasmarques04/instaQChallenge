import { prisma } from '../db';

export default async function deleteManyUsers() {
  await prisma.user.deleteMany({});
}
