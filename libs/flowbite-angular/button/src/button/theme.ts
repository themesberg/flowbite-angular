import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from '../base-button/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteButtonTheme {
  host: FlowbiteButtonHostTheme;
}

export interface FlowbiteButtonHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbiteBaseButtonSizes;
  pill: FlowbiteBoolean;
  color: FlowbiteBaseButtonColors;
  colorOutline: FlowbiteBaseButtonColors;
}

export const flowbiteButtonTheme: FlowbiteButtonTheme = createTheme({
  host: {
    base: 'inline-flex cursor-pointer items-center justify-center border border-transparent text-center font-medium',
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
      info: 'bg-blue-700 text-gray-100 data-focus-visible:ring-blue-400 data-hover:bg-blue-800 dark:bg-blue-800 dark:data-focus-visible:ring-blue-600 dark:data-hover:bg-blue-900',
      failure:
        'bg-red-700 text-gray-100 data-focus-visible:ring-red-400 data-hover:bg-red-800 dark:bg-red-800 dark:data-focus-visible:ring-red-600 dark:data-hover:bg-red-900',
      success:
        'bg-green-700 text-gray-100 data-focus-visible:ring-green-400 data-hover:bg-green-800 dark:bg-green-800 dark:data-focus-visible:ring-green-600 dark:data-hover:bg-green-900',
      warning:
        'bg-yellow-700 text-gray-100 data-focus-visible:ring-yellow-400 data-hover:bg-yellow-800 dark:bg-yellow-800 dark:data-focus-visible:ring-yellow-600 dark:data-hover:bg-yellow-900',
      primary:
        'bg-primary-700 data-hover:bg-primary-800 dark:bg-primary-800 dark:data-hover:bg-primary-900 data-focus-visible:ring-primary-400 dark:data-focus-visible:ring-primary-600 text-gray-100',
      dark: 'bg-gray-800 text-white data-focus-visible:ring-gray-300 data-hover:bg-gray-900 dark:border-white dark:bg-gray-800 dark:data-focus-visible:ring-gray-700 dark:data-hover:bg-gray-700',
      light:
        'border-gray-900 bg-white text-gray-900 data-focus-visible:ring-gray-100 data-hover:bg-gray-200 dark:border-white dark:bg-gray-800 dark:text-white dark:data-focus-visible:ring-gray-700 dark:data-hover:text-gray-900',
      blue: 'bg-blue-500 text-gray-100 data-focus-visible:ring-blue-400 data-hover:bg-blue-700 dark:bg-blue-700 dark:data-focus-visible:ring-blue-500 dark:data-hover:bg-blue-900',
      cyan: 'bg-cyan-500 text-gray-100 data-focus-visible:ring-cyan-400 data-hover:bg-cyan-700 dark:bg-cyan-700 dark:data-focus-visible:ring-cyan-500 dark:data-hover:bg-cyan-900',
      gray: 'bg-gray-500 text-gray-100 data-focus-visible:ring-gray-400 data-hover:bg-gray-700 dark:bg-gray-700 dark:data-focus-visible:ring-gray-500 dark:data-hover:bg-gray-900',
      green:
        'bg-green-700 text-gray-100 data-focus-visible:ring-green-400 data-hover:bg-green-800 dark:bg-green-800 dark:data-focus-visible:ring-green-600 dark:data-hover:bg-green-900',
      indigo:
        'bg-indigo-500 text-gray-100 data-focus-visible:ring-indigo-400 data-hover:bg-indigo-700 dark:bg-indigo-700 dark:data-focus-visible:ring-indigo-500 dark:data-hover:bg-indigo-900',
      lime: 'bg-lime-500 text-gray-100 data-focus-visible:ring-lime-400 data-hover:bg-lime-700 dark:bg-lime-700 dark:data-focus-visible:ring-lime-500 dark:data-hover:bg-lime-900',
      pink: 'bg-pink-500 text-gray-100 data-focus-visible:ring-pink-400 data-hover:bg-pink-700 dark:bg-pink-700 dark:data-focus-visible:ring-pink-500 dark:data-hover:bg-pink-900',
      purple:
        'bg-purple-800 text-gray-100 data-focus-visible:ring-purple-400 data-hover:bg-purple-900 dark:bg-purple-900 dark:data-focus-visible:ring-purple-600 dark:data-hover:bg-purple-950',
      red: 'bg-red-700 text-gray-100 data-focus-visible:ring-red-400 data-hover:bg-red-800 dark:bg-red-800 dark:data-focus-visible:ring-red-600 dark:data-hover:bg-red-900',
      teal: 'bg-teal-500 text-gray-100 data-focus-visible:ring-teal-400 data-hover:bg-teal-700 dark:bg-teal-700 dark:data-focus-visible:ring-teal-500 dark:data-hover:bg-teal-900',
      yellow:
        'bg-yellow-400 text-gray-100 data-focus-visible:ring-yellow-300 data-hover:bg-yellow-500 dark:bg-yellow-600 dark:data-focus-visible:ring-yellow-500 dark:data-hover:bg-yellow-700',
    },
    colorOutline: {
      info: 'border-blue-700 text-blue-700 data-focus-visible:ring-blue-400 data-hover:bg-blue-700 data-hover:text-gray-100 dark:data-focus-visible:ring-blue-600',
      failure:
        'border-red-700 text-red-700 data-focus-visible:ring-red-400 data-hover:bg-red-700 data-hover:text-gray-100 dark:data-focus-visible:ring-red-600',
      success:
        'border-green-700 text-green-700 data-focus-visible:ring-green-400 data-hover:bg-green-700 data-hover:text-gray-100 dark:data-focus-visible:ring-green-600',
      warning:
        'border-yellow-700 text-yellow-700 data-focus-visible:ring-yellow-400 data-hover:bg-yellow-700 data-hover:text-gray-100 dark:data-focus-visible:ring-yellow-600',
      primary:
        'border-primary-700 text-primary-700 data-hover:bg-primary-700 data-focus-visible:ring-primary-400 dark:data-focus-visible:ring-primary-600 data-hover:text-gray-100',
      dark: 'border-gray-800 text-gray-900 data-focus-visible:ring-gray-300 data-hover:bg-gray-900 data-hover:text-white dark:border-gray-600 dark:text-gray-400 dark:data-focus-visible:ring-gray-800 dark:data-hover:bg-gray-600 dark:data-hover:text-white',
      light:
        'border-gray-900 text-gray-900 data-focus-visible:ring-gray-100 data-hover:bg-gray-200 data-hover:text-gray-900 dark:border-white dark:text-white dark:data-focus-visible:ring-gray-600',
      blue: 'border-blue-700 text-blue-700 data-focus-visible:ring-blue-400 data-hover:bg-blue-700 data-hover:text-gray-100 dark:data-focus-visible:ring-blue-600',
      cyan: 'border-cyan-700 text-cyan-700 data-focus-visible:ring-cyan-400 data-hover:bg-cyan-700 data-hover:text-gray-100 dark:data-focus-visible:ring-cyan-600',
      gray: 'border-gray-700 text-gray-700 data-focus-visible:ring-gray-400 data-hover:bg-gray-700 data-hover:text-gray-100 dark:data-focus-visible:ring-gray-600',
      green:
        'border-green-700 text-green-700 data-focus-visible:ring-green-400 data-hover:bg-green-700 data-hover:text-gray-100 dark:data-focus-visible:ring-green-600',
      indigo:
        'border-indigo-700 text-indigo-700 data-focus-visible:ring-indigo-400 data-hover:bg-indigo-700 data-hover:text-gray-100 dark:data-focus-visible:ring-indigo-600',
      lime: 'border-lime-700 text-lime-700 data-focus-visible:ring-lime-400 data-hover:bg-lime-700 data-hover:text-gray-100 dark:data-focus-visible:ring-lime-600',
      pink: 'border-pink-700 text-pink-700 data-focus-visible:ring-pink-400 data-hover:bg-pink-700 data-hover:text-gray-100 dark:data-focus-visible:ring-pink-600',
      purple:
        'border-purple-800 text-purple-800 data-focus-visible:ring-purple-400 data-hover:bg-purple-800 data-hover:text-gray-100 dark:data-focus-visible:ring-purple-600',
      red: 'border-red-700 text-red-700 data-focus-visible:ring-red-400 data-hover:bg-red-700 data-hover:text-gray-100 dark:data-focus-visible:ring-red-600',
      teal: 'border-teal-700 text-teal-700 data-focus-visible:ring-teal-400 data-hover:bg-teal-700 data-hover:text-gray-100 dark:data-focus-visible:ring-teal-600',
      yellow:
        'border-yellow-400 text-yellow-400 data-focus-visible:ring-yellow-300 data-hover:bg-yellow-400 data-hover:text-gray-100 dark:data-focus-visible:ring-yellow-500',
    },
  },
});
