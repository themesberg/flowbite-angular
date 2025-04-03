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
    base: 'border font-medium',
    focus: 'focus:outline-none focus:ring-4',
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
        'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-800 dark:focus:bg-primary-900 border-transparent text-white',
      dark: 'border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:focus:ring-gray-800',
      light:
        'border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-blue-300 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700',
      green:
        'border-transparent bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:focus:ring-green-800',
      red: 'border-transparent bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:focus:ring-red-900',
      yellow:
        'border-transparent bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-400 dark:focus:ring-yellow-900',
      purple:
        'border-transparent bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:focus:ring-purple-900',
    },
  },
});
