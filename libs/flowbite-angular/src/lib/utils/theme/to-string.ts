/**
 * Return theme value to an indented string.
 *
 * @param value The theme to be stringify.
 * @returns The theme as string.
 */
export function themeToString(value: unknown): string {
  return JSON.stringify(value, undefined, 2);
}
