import type { ColorToTheme, FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteTabSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
  full: string;
}

export interface FlowbiteTabColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteTabTheme {
  host: FlowbiteTabHostTheme;
}

export interface FlowbiteTabHostTheme {
  base: string;
  transition: string;
  size: FlowbiteTabSizes;
  color: FlowbiteTabColors;
}

export const flowbiteTabTheme: FlowbiteTabTheme = createTheme({
  host: {
    base: 'w-full rounded-md border',
    transition: '',
    size: {
      sm: 'max-w-md p-2',
      md: 'max-w-lg p-3',
      lg: 'max-w-xl p-4',
      full: 'w-full p-4',
    },
    color: {
      default: {
        light: 'border-gray-300 bg-gray-100',
        dark: 'dark:border-gray-700 dark:bg-gray-800',
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
