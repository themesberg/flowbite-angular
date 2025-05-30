import type { FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteInputFieldColors extends FlowbiteColors {
  [key: string]: string;
}

export interface FlowbiteInputFieldSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteInputFieldTheme {
  host: FlowbiteInputFieldHostTheme;
}

export interface FlowbiteInputFieldHostTheme {
  base: string;
  transition: string;
  disabled: string;
  size: FlowbiteInputFieldSizes;
  color: FlowbiteInputFieldColors;
}

export const flowbiteInputFieldTheme: FlowbiteInputFieldTheme = createTheme({
  host: {
    base: 'block w-full rounded-lg border',
    transition: 'transition-colors duration-150 ease-in-out',
    disabled: 'data-disabled:cursor-not-allowed',
    size: {
      sm: 'p-2 text-base',
      md: 'p-2.5 text-sm',
      xl: 'p-4 text-xs',
    },
    color: {
      info: 'border-blue-400 bg-blue-50 text-gray-900 placeholder-blue-300 data-focus-visible:ring-blue-400 dark:border-blue-600 dark:bg-blue-950 dark:text-white dark:placeholder-blue-400 dark:data-focus-visible:ring-blue-600',
      failure:
        'border-red-400 bg-red-50 text-gray-900 placeholder-red-300 data-focus-visible:ring-red-400 dark:border-red-600 dark:bg-red-950 dark:text-white dark:placeholder-red-400 dark:data-focus-visible:ring-red-600',
      success:
        'border-green-400 bg-green-50 text-gray-900 placeholder-green-300 data-focus-visible:ring-green-400 dark:border-green-600 dark:bg-green-950 dark:text-white dark:placeholder-green-400 dark:data-focus-visible:ring-green-600',
      warning:
        'border-yellow-400 bg-yellow-50 text-gray-900 placeholder-yellow-300 data-focus-visible:ring-yellow-400 dark:border-yellow-600 dark:bg-yellow-950 dark:text-white dark:placeholder-yellow-400 dark:data-focus-visible:ring-yellow-600',
      primary:
        'dark:border-primary-600 border-primary-400 placeholder-primary-300 dark:placeholder-primary-400 dark:bg-primary-950 bg-primary-50 data-focus-visible:ring-primary-400 dark:data-focus-visible:ring-primary-600 text-gray-900 dark:text-white',
      dark: 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-300 data-focus-visible:ring-gray-300 dark:border-gray-600 dark:bg-gray-950 dark:text-white dark:placeholder-gray-400 dark:data-focus-visible:ring-gray-800',
      light:
        'border-gray-100 bg-gray-50 text-gray-900 placeholder-gray-300 data-focus-visible:ring-gray-100 dark:border-gray-600 dark:bg-gray-950 dark:text-white dark:placeholder-gray-400 dark:data-focus-visible:ring-gray-600',
      blue: 'border-blue-400 bg-blue-50 text-gray-900 placeholder-blue-300 data-focus-visible:ring-blue-400 dark:border-blue-600 dark:bg-blue-950 dark:text-white dark:placeholder-blue-400 dark:data-focus-visible:ring-blue-600',
      cyan: 'border-cyan-400 bg-cyan-50 text-gray-900 placeholder-cyan-300 data-focus-visible:ring-cyan-400 dark:border-cyan-600 dark:bg-cyan-950 dark:text-white dark:placeholder-cyan-400 dark:data-focus-visible:ring-cyan-600',
      gray: 'border-gray-400 bg-gray-50 text-gray-900 placeholder-gray-300 data-focus-visible:ring-gray-400 dark:border-gray-600 dark:bg-gray-950 dark:text-white dark:placeholder-gray-400 dark:data-focus-visible:ring-gray-600',
      green:
        'border-green-400 bg-green-50 text-gray-900 placeholder-green-300 data-focus-visible:ring-green-400 dark:border-green-600 dark:bg-green-950 dark:text-white dark:placeholder-green-400 dark:data-focus-visible:ring-green-600',
      indigo:
        'border-indigo-400 bg-indigo-50 text-gray-900 placeholder-indigo-300 data-focus-visible:ring-indigo-400 dark:border-indigo-600 dark:bg-indigo-950 dark:text-white dark:placeholder-indigo-400 dark:data-focus-visible:ring-indigo-600',
      lime: 'border-lime-400 bg-lime-50 text-gray-900 placeholder-lime-300 data-focus-visible:ring-lime-400 dark:border-lime-600 dark:bg-lime-950 dark:text-white dark:placeholder-lime-400 dark:data-focus-visible:ring-lime-600',
      pink: 'border-pink-400 bg-pink-50 text-gray-900 placeholder-pink-300 data-focus-visible:ring-pink-400 dark:border-pink-600 dark:bg-pink-950 dark:text-white dark:placeholder-pink-400 dark:data-focus-visible:ring-pink-600',
      purple:
        'border-purple-400 bg-purple-50 text-gray-900 placeholder-purple-300 data-focus-visible:ring-purple-400 dark:border-purple-600 dark:bg-purple-950 dark:text-white dark:placeholder-purple-400 dark:data-focus-visible:ring-purple-600',
      red: 'border-red-400 bg-red-50 text-gray-900 placeholder-red-300 data-focus-visible:ring-red-400 dark:border-red-600 dark:bg-red-950 dark:text-white dark:placeholder-red-400 dark:data-focus-visible:ring-red-600',
      teal: 'border-teal-400 bg-teal-50 text-gray-900 placeholder-teal-300 data-focus-visible:ring-teal-400 dark:border-teal-600 dark:bg-teal-950 dark:text-white dark:placeholder-teal-400 dark:data-focus-visible:ring-teal-600',
      yellow:
        'border-yellow-300 bg-yellow-50 text-gray-900 placeholder-yellow-300 data-focus-visible:ring-yellow-300 dark:border-yellow-500 dark:bg-yellow-950 dark:text-white dark:placeholder-yellow-400 dark:data-focus-visible:ring-yellow-500',
    },
  },
});
