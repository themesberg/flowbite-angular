export type DocTheme = { title: string; content: string; description?: string | undefined };
export type DocThemes = DocTheme[];

export const toIndentedJson = (value: unknown) => JSON.stringify(value, undefined, 2);
