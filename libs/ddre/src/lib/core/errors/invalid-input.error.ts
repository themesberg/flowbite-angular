export class InvalidInputError extends Error {
  public constructor(inputName: string, message: string | undefined, options: ErrorOptions) {
    if (message) {
      super(`Input ${inputName} : ${message}`, options);
    } else {
      super(`Input ${inputName}`, options);
    }
  }
}
