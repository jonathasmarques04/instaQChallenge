import axios from 'axios';
import { expect } from 'chai';

describe('Creation mutation test', () => {
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

  it('should create a user mutation', async () => {
    const response = await axios.post('http://localhost:4000/', {
      query: `
          mutation CreateUser($data: UserInput!) {
            createUser(data: $data) {
              name
              email
            }
          }
        `,
      variables: {
        data: {
          name: userName,
          email: userEmail,
          password: userPassword,
          birthDate: userBirthday,
        },
      },
    });

    // const result = response.data.data
    // expect(result.createUser.email).equal(userEmail)
    expect(response.status).equal(200);
    console.log(response.data);
  });

  it('should throw error if email is already in use', async () => {
    const variables = {
      data: {
        name: userName,
        email: userEmail,
        password: userPassword,
        birthDate: userBirthday,
      },
    };
    const response = await axios.post('http://localhost:4000/', {
      query,
      variables,
    });

    expect(response.data.errors).to.have.lengthOf(1);
    const error = response.data.errors[0];
    expect(error.message).to.be.eq('O email já existe');
  });
});
