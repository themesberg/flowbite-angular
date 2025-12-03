import type { FLowbiteCardColors, FlowbiteCardSizes } from '../card/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteCardContentTheme {
  host: FlowbiteCardContentHostTheme;
}

export interface FlowbiteCardContentHostTheme {
  base: string;
  transition: string;
  color: FLowbiteCardColors;
  size: FlowbiteCardSizes;
}

export const flowbiteCardContentTheme: FlowbiteCardContentTheme = createTheme({
  host: {
    base: 'p-6 font-normal',
    transition: '',
    color: {
      default: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-100',
      },
      info: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-100',
      },
      failure: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-100',
      },
      success: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-100',
      },
      warning: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-100',
      },
      primary: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-100',
      },
    },
    size: {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
    },
  },
});
