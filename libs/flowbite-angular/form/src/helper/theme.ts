import type { FlowbiteFormFieldColors } from '../form-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteHelperTheme {
  host: FlowbiteHelperHostTheme;
}

export interface FlowbiteHelperHostTheme {
  base: string;
  transition: string;
  color: FlowbiteFormFieldColors;
}

export const flowbiteHelperTheme: FlowbiteHelperTheme = createTheme({
  host: {
    base: 'mt-2 text-sm',
    transition: '',
    color: {
      default: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      info: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      failure: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      success: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      warning: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      primary: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
    },
  },
});
