import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteButtonSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteButtonColors
  extends Pick<
    FlowbiteColors,
    'primary' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple'
  > {
  [key: string]: string;
}

export interface FlowbiteButtonTheme {
  host: FlowbiteButtonHostTheme;
}

export interface FlowbiteButtonHostTheme {
  base: string;
  focus: string;
  disabled: string;
  size: FlowbiteButtonSizes;
  isPill: FlowbiteBoolean;
  color: FlowbiteButtonColors;
  colorOutline: FlowbiteButtonColors;
}

export const flowbiteButtonTheme: FlowbiteButtonTheme = createTheme({
  host: {
    base: 'relative cursor-pointer border font-medium',
    focus: 'data-focus:ring-4 data-focus:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
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
        'border-gray-300 bg-white text-black hover:bg-gray-100 focus:ring-blue-300 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700',
      green:
        'border-transparent bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:focus:ring-green-800',
      red: 'border-transparent bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:focus:ring-red-900',
      yellow:
        'border-transparent bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-400 dark:focus:ring-yellow-900',
      purple:
        'border-transparent bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:focus:ring-purple-900',
    },
    colorOutline: {
      primary:
        'border-primary-800 text-primary-800 data-hover:bg-primary-800 data-hover:text-white',
      dark: 'border-gray-800 text-gray-800 data-hover:bg-gray-800 data-hover:text-white',
      light: 'border-gray-300 text-black data-hover:bg-gray-300 data-hover:text-black',
      green: 'border-green-700 text-green-700 data-hover:bg-green-700 data-hover:text-white',
      red: 'border-red-700 text-red-700 data-hover:bg-red-700 data-hover:text-white',
      yellow: 'border-yellow-400 text-yellow-400 data-hover:bg-yellow-400 data-hover:text-white',
      purple: 'border-purple-700 text-purple-700 data-hover:bg-purple-700 data-hover:text-white',
    },
  },
});
