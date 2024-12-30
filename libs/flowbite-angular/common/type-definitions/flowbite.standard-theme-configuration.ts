export type StandardThemeConfiguration = {
  base: {
    light: string;
    dark: string;
  };
  hover:
    | {
        light: string;
        dark: string;
      }
    | undefined;
  focus:
    | {
        light: string;
        dark: string;
      }
    | undefined;
  disabled:
    | {
        light: string;
        dark: string;
      }
    | undefined;
};
