import type { FlowbiteTableColors } from '../table/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteTableBodyTheme {
  host: FlowbiteTableBodyHostTheme;
}

export interface FlowbiteTableBodyHostTheme {
  base: string;
  color: FlowbiteTableColors;
}

export const flowbiteTableBodyTheme: FlowbiteTableBodyTheme = createTheme({
  host: {
    base: 'border-b',
    color: {
      default: {
        light: 'border-gray-200 data-striped:odd:bg-white data-striped:even:bg-gray-50',
        dark: 'dark:border-gray-700 data-striped:odd:dark:bg-gray-900 data-striped:even:dark:bg-gray-800',
      },
      info: {
        light: 'border-blue-200 data-striped:odd:bg-white data-striped:even:bg-blue-50',
        dark: 'dark:border-blue-900 data-striped:odd:dark:bg-blue-950 data-striped:even:dark:bg-blue-900',
      },
      failure: {
        light: 'border-red-200 data-striped:odd:bg-white data-striped:even:bg-red-50',
        dark: 'dark:border-red-900 data-striped:odd:dark:bg-red-950 data-striped:even:dark:bg-red-900',
      },
      success: {
        light: 'border-green-200 data-striped:odd:bg-white data-striped:even:bg-green-50',
        dark: 'dark:border-green-900 data-striped:odd:dark:bg-green-950 data-striped:even:dark:bg-green-900',
      },
      warning: {
        light: 'border-yellow-200 data-striped:odd:bg-white data-striped:even:bg-yellow-50',
        dark: 'dark:border-yellow-900 data-striped:odd:dark:bg-yellow-950 data-striped:even:dark:bg-yellow-900',
      },
      primary: {
        light: 'border-primary-200 data-striped:even:bg-primary-50 data-striped:odd:bg-white',
        dark: 'dark:border-primary-900 data-striped:odd:dark:bg-primary-950 data-striped:even:dark:bg-primary-900',
      },
    },
  },
});
