import axios from 'axios';
import { expect } from 'chai';

describe('API Test', () => {
  it('should execute a users query', async () => {
    const response = await axios.post('http://localhost:4000/', {
      query: `
        query {
          users {
            name
          }
        }
      `,
    });
    console.log(response.data);
    expect(response.status).to.equal(200);
  });
});