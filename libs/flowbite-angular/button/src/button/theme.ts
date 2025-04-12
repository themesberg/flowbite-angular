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
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbiteButtonSizes;
  pill: FlowbiteBoolean;
  color: FlowbiteButtonColors;
  colorOutline: FlowbiteButtonColors;
}

export const flowbiteButtonTheme: FlowbiteButtonTheme = createTheme({
  host: {
    base: 'relative flex cursor-pointer items-center justify-center border border-transparent text-center font-medium',
    transition: 'transition-colors duration-150 ease-in-out',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3.5 text-base',
    },
    pill: {
      on: 'rounded-full',
      off: 'rounded-lg',
    },
    color: {
      primary:
        'bg-primary-700 data-hover:bg-primary-800 dark:bg-primary-800 dark:data-hover:bg-primary-900 data-focus-visible:ring-primary-400 dark:data-focus-visible:ring-primary-600 text-gray-100',
      dark: 'bg-gray-600 text-gray-100 data-focus-visible:ring-gray-400 data-hover:bg-gray-700 dark:bg-gray-900 dark:data-focus-visible:ring-gray-600 dark:data-hover:bg-gray-800',
      light:
        'bg-gray-100 text-gray-900 data-focus-visible:ring-gray-400 data-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:data-focus-visible:ring-gray-600 dark:data-hover:bg-gray-600',
      green:
        'bg-green-700 text-gray-100 data-focus-visible:ring-green-400 data-hover:bg-green-800 dark:bg-green-800 dark:data-focus-visible:ring-green-600 dark:data-hover:bg-green-900',
      red: 'bg-red-700 text-gray-100 data-focus-visible:ring-red-400 data-hover:bg-red-800 dark:bg-red-800 dark:data-focus-visible:ring-red-600 dark:data-hover:bg-red-900',
      yellow:
        'bg-yellow-400 text-gray-100 data-focus-visible:ring-yellow-300 data-hover:bg-yellow-500 dark:bg-yellow-600 dark:data-focus-visible:ring-yellow-500 dark:data-hover:bg-yellow-700',
      purple:
        'bg-purple-800 text-gray-100 data-focus-visible:ring-purple-400 data-hover:bg-purple-900 dark:bg-purple-900 dark:data-focus-visible:ring-purple-600 dark:data-hover:bg-purple-950',
    },
    colorOutline: {
      primary:
        'border-primary-700 text-primary-700 data-hover:bg-primary-700 data-focus-visible:ring-primary-400 dark:data-focus-visible:ring-primary-600 data-hover:text-gray-100',
      dark: 'border-gray-600 text-gray-600 data-focus-visible:ring-gray-400 data-hover:bg-gray-600 data-hover:text-gray-100 dark:data-focus-visible:ring-gray-600',
      light:
        'border-gray-600 text-gray-600 data-focus-visible:ring-gray-400 data-hover:bg-gray-300 data-hover:text-gray-900 dark:data-focus-visible:ring-gray-600',
      green:
        'border-green-700 text-green-700 data-focus-visible:ring-green-400 data-hover:bg-green-700 data-hover:text-gray-100 dark:data-focus-visible:ring-green-600',
      red: 'border-red-700 text-red-700 data-focus-visible:ring-red-400 data-hover:bg-red-700 data-hover:text-gray-100 dark:data-focus-visible:ring-red-600',
      yellow:
        'border-yellow-400 text-yellow-400 data-focus-visible:ring-yellow-300 data-hover:bg-yellow-400 data-hover:text-gray-100 dark:data-focus-visible:ring-yellow-500',
      purple:
        'border-purple-800 text-purple-800 data-focus-visible:ring-purple-400 data-hover:bg-purple-800 data-hover:text-gray-100 dark:data-focus-visible:ring-purple-600',
    },
  },
});
