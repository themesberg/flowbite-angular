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
      xs: 'w-xs',
      sm: 'w-sm',
      md: 'w-md',
      lg: 'w-lg',
      xl: 'w-xl',
    },
  },
});
