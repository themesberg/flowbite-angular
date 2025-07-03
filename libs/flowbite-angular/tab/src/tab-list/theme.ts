import type { FlowbiteTabColors } from '../tab/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteTabListTheme {
  host: FlowbiteTabListHostTheme;
}

export interface FlowbiteTabListHostTheme {
  base: string;
  transition: string;
  color: FlowbiteTabColors;
}

export const flowbiteTabListTheme: FlowbiteTabListTheme = createTheme({
  host: {
    base: 'flex overflow-x-scroll overflow-y-clip border-b text-center',
    transition: '',
    color: {
      default: {
        light: 'border-gray-200',
        dark: 'dark:border-gray-700',
      },
      info: {
        light: 'border-blue-200',
        dark: 'dark:border-blue-700',
      },
      failure: {
        light: 'border-red-200',
        dark: 'dark:border-red-700',
      },
      success: {
        light: 'border-green-200',
        dark: 'dark:border-green-700',
      },
      warning: {
        light: 'border-yellow-200',
        dark: 'dark:border-yellow-700',
      },
      primary: {
        light: 'border-primary-200',
        dark: 'dark:border-primary-700',
      },
    },
  },
});
