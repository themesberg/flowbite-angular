import type { FLowbiteCardColors } from '../card/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteCardHeaderTheme {
  host: FlowbiteCardHeaderHostTheme;
}

export interface FlowbiteCardHeaderHostTheme {
  base: string;
  transition: string;
  color: FLowbiteCardColors;
}

export const flowbiteCardHeaderTheme: FlowbiteCardHeaderTheme = createTheme({
  host: {
    base: 'mb-2 text-2xl font-bold tracking-tight',
    transition: '',
    color: {
      default: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      info: {
        light: '',
        dark: '',
      },
      failure: {
        light: '',
        dark: '',
      },
      success: {
        light: '',
        dark: '',
      },
      warning: {
        light: '',
        dark: '',
      },
      primary: {
        light: '',
        dark: '',
      },
    },
  },
});
