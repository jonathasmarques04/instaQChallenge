import { UserResponse } from "../../aplication";

export class User {
  constructor(private props: UserResponse) {
    this.valitadeData();
  }

  private valitadeData() {
    if (!this.isValidEmail(this.props.email)) {
      throw new Error('Email invalido');
    }

    if (
      this.props.password.length < 6 ||
      !/[a-zA-Z]/.test(this.props.password) ||
      !/[0-9]/.test(this.props.password)
    ) {
      throw new Error('A senha deve ter pelo menos 6 caracteres, incluindo pelo menos uma letra e um dígito.');
    }
  }

  private isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get birthDate(): string {
    return this.props.birthDate;
  }
}
