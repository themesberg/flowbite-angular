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
        light: '',
        dark: '',
      },
      failure: {
        light: '',
        dark: '',
      },
      success: {
        light: '',
        dark: '',
      },
      warning: {
        light: '',
        dark: '',
      },
      primary: {
        light: '',
        dark: '',
      },
    },
  },
});
