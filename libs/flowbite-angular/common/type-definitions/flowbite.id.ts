/**
 * This class provide an implementation of Guid used as id for flowbite-angular components.
 *
 * @see https://gist.github.com/emptyother/1fd97db034ef848f38eca3354fa9ee90
 */
export class Guid {
  private value: string = this.empty;

  /**
   * If value is given and if the value is a valid Guid, then return a Guid from the string ; Otherwise or if no value is given, create a Guid class without value.
   *
   * @param value Guid as string if you want to get a Guid type from string
   */
  constructor(value?: string) {
    if (value) {
      if (Guid.isValid(value)) {
        this.value = value;
      }
    }
  }

  /**
   * Function that generate new Guid.
   *
   * @returns New Guid.
   */
  public static newGuid(): Guid {
    return new Guid(crypto.randomUUID());
  }

  /**
   * Function that generate an empty Guid.
   *
   * @return "00000000-0000-0000-0000-000000000000".
   */
  public static get empty(): string {
    return '00000000-0000-0000-0000-000000000000';
  }

  /**
   * Function that generate an empty Guid.
   *
   * @return "00000000-0000-0000-0000-000000000000".
   */
  public get empty(): string {
    return Guid.empty;
  }

  /**
   * Check if the provided Guid is valid.
   *
   * @param str The Guid to check.
   * @returns true if the Guid is valid ; false otherwise.
   */
  public static isValid(str: string): boolean {
    const validRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return validRegex.test(str);
  }

  /**
   * ToString base method.
   *
   * @returns Value as string.
   */
  public toString() {
    return this.value;
  }

  /**
   * ToJson base method.
   *
   * @returns Value as Json compatible string.
   */
  public toJSON(): string {
    return this.value;
  }
}

/**
 * Function that return a new Guid.
 *
 * @returns New {@link Guid}.
 *
 * @see `Guid`
 */
export function generateId(): Guid {
  return Guid.newGuid();
}
