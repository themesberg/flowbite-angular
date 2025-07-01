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
        light: 'text-blue-900',
        dark: 'dark:text-blue-700',
      },
      failure: {
        light: 'text-red-900',
        dark: 'dark:text-red-700',
      },
      success: {
        light: 'text-green-900',
        dark: 'dark:text-green-700',
      },
      warning: {
        light: 'text-yellow-900',
        dark: 'dark:text-yellow-700',
      },
      primary: {
        light: 'text-primary-900',
        dark: 'dark:text-primary-700',
      },
    },
  },
});
