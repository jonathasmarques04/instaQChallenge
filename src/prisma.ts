import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createUser(){
    const person = await prisma.user.create({
        data: {
            name: 'Jonathas',
            email: 'jonathas.mail@mail.com'
        }
    }) //Criação de um usuário no banco através do prisma.
    console.log(person)
}

createUser()