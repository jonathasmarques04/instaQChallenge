export interface UserInput {
  data: {
    name: string;
    email: string;
    password: string;
    birthDate: string;
  };
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  password: string;
  birthDate: string;
}
