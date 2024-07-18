export class InvalidInputError extends Error {
  public constructor(inputName: string, message: string = '', options: ErrorOptions = {}) {
    super(`Input ${inputName}${message ? ` : ${message}` : ''}`, options);
  }
}
