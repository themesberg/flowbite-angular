import type { FlowbiteFormFieldColors, FlowbiteFormFieldModes } from '../form-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteLabelTheme {
  host: FlowbiteLabelHostTheme;
}

export interface FlowbiteLabelHostTheme {
  base: string;
  color: FlowbiteFormFieldColors;
  mode: FlowbiteFormFieldModes;
}

export const flowbiteLabelTheme: FlowbiteLabelTheme = createTheme({
  host: {
    base: 'mb-2 block text-sm font-medium',
    color: {
      blue: 'text-blue-900 dark:text-blue-600',
      cyan: 'text-cyan-900 dark:text-cyan-600',
      dark: 'text-gray-900 dark:text-gray-600',
      default: 'text-gray-900 dark:text-white',
      failure: 'text-red-900 dark:text-red-600',
      gray: 'text-gray-900 dark:text-gray-600',
      green: 'text-green-900 dark:text-green-600',
      indigo: 'text-indigo-900 dark:text-indigo-600',
      info: 'text-blue-900 dark:text-blue-600',
      light: 'text-gray-900 dark:text-gray-600',
      lime: 'text-lime-900 dark:text-lime-600',
      pink: 'text-pink-900 dark:text-pink-600',
      primary: 'text-primary-900 dark:text-primary-600',
      purple: 'text-purple-900 dark:text-purple-600',
      red: 'text-red-900 dark:text-red-600',
      success: 'text-green-900 dark:text-green-600',
      teal: 'text-teal-900 dark:text-teal-600',
      warning: 'text-yellow-900 dark:text-yellow-600',
      yellow: 'text-yellow-900 dark:text-yellow-600',
    },
    mode: {
      normal: '',
      floating:
        'absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform transition-transform duration-150 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium',
    },
  },
});
