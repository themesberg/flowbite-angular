export type DocTheme = { title: string; content: string; description?: string | undefined };
export type DocThemes = DocTheme[];

export const toIndentedJson = (
  value: unknown,
  replacer?: (this: unknown, key: string, value: unknown) => unknown,
  space: number = 2
): string => JSON.stringify(value, replacer, space);
