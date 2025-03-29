import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '../../core';
import { createTheme } from '../../core/utils/create-theme';

export interface ButtonSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface ButtonColors
  extends Pick<
    FlowbiteColors,
    'primary' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple'
  > {
  [key: string]: string;
}

export interface FlowbiteButtonTheme {
  root: FlowbiteButtonRootTheme;
}

export interface FlowbiteButtonRootTheme {
  base: string;
  focus: string;
  disabled: string;
  size: ButtonSizes;
  isPill: FlowbiteBoolean;
  color: ButtonColors;
}

export const flowbiteButtonTheme: FlowbiteButtonTheme = createTheme({
  root: {
    base: 'font-medium border',
    focus: 'focus:ring-4 focus:outline-none',
    disabled: 'disabled:cursor-not-allowed disabled:bg-opacity-50',
    size: {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3.5 text-base',
    },
    isPill: {
      on: 'rounded-full',
      off: 'rounded-lg',
    },
    color: {
      primary:
        'text-white bg-primary-700 border-transparent hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-800 dark:focus:bg-primary-900',
      dark: 'text-white bg-gray-800 border-transparent hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:focus:ring-gray-800',
      light:
        'text-gray-900 bg-white border-gray-300 hover:bg-gray-100 focus:ring-blue-300 dark:bg-gray-600 dark:focus:ring-gray-700 dark:text-white',
      green:
        'text-white bg-green-700 border-transparent hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:focus:ring-green-800',
      red: 'text-white bg-red-700 border-transparent hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:focus:ring-red-900',
      yellow:
        'text-white bg-yellow-400 border-transparent hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-400 dark:focus:ring-yellow-900',
      purple:
        'text-white bg-purple-700 border-transparent hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:focus:ring-purple-900',
    },
  },
});
