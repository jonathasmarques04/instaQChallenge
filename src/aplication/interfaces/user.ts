export interface UserInput {
  data: {
    name: string;
    email: string;
    password: string;
    birthDate: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  birthDate: string;
}
