import type {
  FlowbiteFormFieldColors,
  FlowbiteFormFieldModes,
  FlowbiteFormFieldSizes,
} from '../form-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteFormControlTheme {
  host: FlowbiteFormControlHostTheme;
}

export interface FlowbiteFormControlHostTheme {
  base: string;
  disabled: string;
  size: FlowbiteFormFieldSizes;
  color: FlowbiteFormFieldColors;
  mode: FlowbiteFormFieldModes;
}

export const flowbiteFormControlTheme: FlowbiteFormControlTheme = createTheme({
  host: {
    base: 'block w-full text-sm',
    disabled: 'data-disabled:cursor-not-allowed',
    size: {
      sm: 'p-2',
      md: 'p-2.5',
      xl: 'p-3',
    },
    color: {
      blue: {
        light: 'border-blue-300 bg-blue-50 text-blue-900',
        dark: 'dark:border-blue-600 dark:bg-blue-900 dark:text-blue-500 dark:placeholder-blue-400',
      },
      cyan: {
        light: 'border-cyan-300 bg-cyan-50 text-cyan-900',
        dark: 'dark:border-cyan-600 dark:bg-cyan-900 dark:text-cyan-500 dark:placeholder-cyan-400',
      },
      dark: {
        light: 'border-gray-300 bg-gray-50 text-gray-900',
        dark: 'dark:border-gray-600 dark:bg-gray-900 dark:text-gray-500 dark:placeholder-gray-400',
      },
      default: {
        light: 'border-gray-300 bg-gray-50 text-gray-900',
        dark: 'dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
      },
      failure: {
        light: 'border-red-300 bg-red-50 text-red-900',
        dark: 'dark:border-red-600 dark:bg-red-900 dark:text-red-500 dark:placeholder-red-400',
      },
      gray: {
        light: 'border-gray-300 bg-gray-50 text-gray-900',
        dark: 'dark:border-gray-600 dark:bg-gray-900 dark:text-gray-500 dark:placeholder-gray-400',
      },
      green: {
        light: 'border-green-300 bg-green-50 text-green-900',
        dark: 'dark:border-green-600 dark:bg-green-900 dark:text-green-500 dark:placeholder-green-400',
      },
      indigo: {
        light: 'border-indigo-300 bg-indigo-50 text-indigo-900',
        dark: 'dark:border-indigo-600 dark:bg-indigo-900 dark:text-indigo-500 dark:placeholder-indigo-400',
      },
      info: {
        light: 'border-blue-300 bg-blue-50 text-blue-900',
        dark: 'dark:border-blue-600 dark:bg-blue-900 dark:text-blue-500 dark:placeholder-blue-400',
      },
      light: {
        light: 'border-gray-300 bg-gray-50 text-gray-900',
        dark: 'dark:border-gray-600 dark:bg-gray-900 dark:text-gray-500 dark:placeholder-gray-400',
      },
      lime: {
        light: 'border-lime-300 bg-lime-50 text-lime-900',
        dark: 'dark:border-lime-600 dark:bg-lime-900 dark:text-lime-500 dark:placeholder-lime-400',
      },
      pink: {
        light: 'border-pink-300 bg-pink-50 text-pink-900',
        dark: 'dark:border-pink-600 dark:bg-pink-900 dark:text-pink-500 dark:placeholder-pink-400',
      },
      primary: {
        light: 'border-primary-300 bg-primary-50 text-primary-900',
        dark: 'dark:border-primary-600 dark:bg-primary-900 dark:text-primary-500 dark:placeholder-primary-400',
      },
      purple: {
        light: 'border-purple-300 bg-purple-50 text-purple-900',
        dark: 'dark:border-purple-600 dark:bg-purple-900 dark:text-purple-500 dark:placeholder-purple-400',
      },
      red: {
        light: 'border-red-300 bg-red-50 text-red-900',
        dark: 'dark:border-red-600 dark:bg-red-900 dark:text-red-500 dark:placeholder-red-400',
      },
      success: {
        light: 'border-green-300 bg-green-50 text-green-900',
        dark: 'dark:border-green-600 dark:bg-green-900 dark:text-green-500 dark:placeholder-green-400',
      },
      teal: {
        light: 'border-teal-300 bg-teal-50 text-teal-900',
        dark: 'dark:border-teal-600 dark:bg-teal-900 dark:text-teal-500 dark:placeholder-teal-400',
      },
      warning: {
        light: 'border-yellow-300 bg-yellow-50 text-yellow-900',
        dark: 'dark:border-yellow-600 dark:bg-yellow-900 dark:text-yellow-500 dark:placeholder-yellow-400',
      },
      yellow: {
        light: 'border-yellow-300 bg-yellow-50 text-yellow-900',
        dark: 'dark:border-yellow-600 dark:bg-yellow-900 dark:text-yellow-500 dark:placeholder-yellow-400',
      },
    },
    mode: {
      normal: 'rounded-lg border',
      floating: 'peer appearance-none border-b-2 bg-transparent px-0 dark:bg-transparent',
    },
  },
});
