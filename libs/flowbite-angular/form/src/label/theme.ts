import type { FlowbiteFormFieldColors, FlowbiteFormFieldModes } from '../form-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteLabelTheme {
  host: FlowbiteLabelHostTheme;
}

export interface FlowbiteLabelHostTheme {
  base: string;
  transition: string;
  color: FlowbiteFormFieldColors;
  mode: FlowbiteFormFieldModes;
}

export const flowbiteLabelTheme: FlowbiteLabelTheme = createTheme({
  host: {
    base: 'mb-2 block text-sm font-medium',
    transition: '',
    color: {
      default: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      info: {
        light: 'text-blue-900',
        dark: 'dark:text-blue-500',
      },
      failure: {
        light: 'text-red-900',
        dark: 'dark:text-red-500',
      },
      success: {
        light: 'text-green-900',
        dark: 'dark:text-green-500',
      },
      warning: {
        light: 'text-yellow-900',
        dark: 'dark:text-yellow-500',
      },
      primary: {
        light: 'text-primary-900',
        dark: 'dark:text-primary-500',
      },
    },
    mode: {
      normal: '',
      floating:
        'absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform transition-transform duration-150 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium',
    },
  },
});
