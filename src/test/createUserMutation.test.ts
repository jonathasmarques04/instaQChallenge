import axios from 'axios';
import { expect } from 'chai';
import { prisma } from '../infra';

describe('Creation mutation test', () => {
  before(async () => {
    await prisma.user.deleteMany({})
  })

  after(async () => {
    await prisma.user.deleteMany({})
  })

  let userName = 'Jhon';
  let userEmail = 'john@example.com';
  let userPassword = 'password123';
  let userBirthday = '00-00-000';

  const query = `
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      name
      email
    }
  }
`;

const variables = {
  data: {
    name: userName,
    email: userEmail,
    password: userPassword,
    birthDate: userBirthday,
  },
};

  it('should create a user mutation', async () => {
    const response = await axios.post('http://localhost:4000/', {
      query,
      variables
    });

    expect(response.status).equal(200);
  });

  it('should throw error if email is already in use', async () => {
    
    const response = await axios.post('http://localhost:4000/', {
      query,
      variables,
    });

    expect(response.data.errors).to.have.lengthOf(1);
    const error = response.data.errors[0];
    expect(error.message).to.equal('O email já existe');
    expect(error.extensions.code).to.equal("INTERNAL_SERVER_ERROR");
  });

  it('should throw error if password is invalid', async () => {
    
    const response = await axios.post('http://localhost:4000/', {
      query,
      variables: {
        data: {
          name: userName,
          email: '123452@mail.com',
          password: '1234',
          birthDate: userBirthday,
        }
      },
    });

    expect(response.data.errors).to.have.lengthOf(1);
    const error = response.data.errors[0];
    expect(error.message).to.equal('A senha deve ter pelo menos 6 caracteres, incluindo pelo menos uma letra e um dígito.');
    expect(error.extensions.code).to.equal("INTERNAL_SERVER_ERROR");
  });
});
