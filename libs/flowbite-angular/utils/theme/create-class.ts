/**
 * This function is used to create classes for component's while keeping the intellisens up for TailwindCSS and other extensions.
 *
 * @param input Generic type to be created.
 * @returns The generic type's definition.
 */
export function createClass<T>(input: T) {
  return input;
}
