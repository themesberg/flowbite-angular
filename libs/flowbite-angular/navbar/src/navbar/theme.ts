import type { ColorToTheme, FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteNavbarTheme {
  host: FlowbiteNavbarHostTheme;
  container: FlowbiteNavbarContainerTheme;
}

export interface FlowbiteNavbarHostTheme {
  base: string;
  transition: string;
  fixed: FlowbiteBoolean;
  color: FlowbiteNavbarColors;
}

export interface FlowbiteNavbarContainerTheme {
  base: string;
  transition: string;
}

export const flowbiteNavbarTheme: FlowbiteNavbarTheme = createTheme({
  host: {
    base: '',
    transition: '',
    fixed: {
      on: 'fixed start-0 top-0 z-20 w-full border-b',
      off: '',
    },
    color: {
      default: {
        light: 'border-gray-200 bg-gray-100',
        dark: 'dark:border-gray-800 dark:bg-gray-900',
      },
      info: {
        light: 'border-blue-200 bg-gray-100',
        dark: 'dark:border-blue-800 dark:bg-gray-900',
      },
      failure: {
        light: 'border-red-200 bg-gray-100',
        dark: 'dark:border-red-800 dark:bg-gray-900',
      },
      success: {
        light: 'border-green-200 bg-gray-100',
        dark: 'dark:border-green-800 dark:bg-gray-900',
      },
      warning: {
        light: 'border-yellow-200 bg-gray-100',
        dark: 'dark:border-yellow-800 dark:bg-gray-900',
      },
      primary: {
        light: 'border-primary-200 bg-gray-100',
        dark: 'dark:border-primary-800 dark:bg-gray-900',
      },
    },
  },
  container: {
    base: 'mx-auto flex max-w-screen flex-wrap items-center justify-between p-4',
    transition: '',
  },
});
