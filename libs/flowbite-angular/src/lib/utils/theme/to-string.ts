export function themeToString(value: unknown): string {
  return JSON.stringify(value, undefined, 2);
}
