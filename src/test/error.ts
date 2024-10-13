// Erros relacionados aos inputs
export class InputError extends Error {
    code = 400;
  
    constructor( message: string, additionalInfo?: string) {
      super();
    }
  }