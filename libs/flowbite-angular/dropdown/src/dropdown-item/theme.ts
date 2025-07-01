import type { FLowbiteDropdownColors } from '../dropdown/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteDropdownItemTheme {
  host: FlowbiteDropdownItemHostTheme;
}

export interface FlowbiteDropdownItemHostTheme {
  base: string;
  transition: string;
  color: FLowbiteDropdownColors;
}

export const flowbiteDropdownItemTheme: FlowbiteDropdownItemTheme = createTheme({
  host: {
    base: 'flex cursor-pointer items-center justify-between px-4 py-2 font-medium',
    transition: '',
    color: {
      default: {
        light: 'hover:bg-gray-100',
        dark: 'dark:hover:bg-gray-600 dark:hover:text-white',
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
