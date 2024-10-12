import axios from 'axios';
import { expect } from 'chai';

describe('Creation mutation test', () => {
  it('should create a user mutation', async () => {
    const response = await axios.post('http://localhost:4000/', {
      query: `
          mutation CreateUser($data: UserInput!) {
            createUser(data: $data) {
              id
              name
              email
            }
          }
        `,
      variables: {
        data: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          password: 'password123',
        },
      },
    });

    expect(response.status).equal(200);
    console.log(response.data);
  });
});
