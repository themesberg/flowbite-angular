import type { ColorToTheme, FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteBreadcrumbColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [ket: string]: ColorToTheme;
}

export interface FlowbiteBreadcrumbTheme {
  host: FlowbiteBreadcrumbHostTheme;
}

export interface FlowbiteBreadcrumbHostTheme {
  base: string;
  transition: string;
  solid: FlowbiteBoolean;
  color: FlowbiteBreadcrumbColors;
}

export const flowbiteBreadcrumbTheme: FlowbiteBreadcrumbTheme = createTheme({
  host: {
    base: 'inline-flex items-center gap-1 rounded-lg px-5 py-3',
    transition: '',
    solid: {
      on: 'border',
      off: 'border-none bg-transparent',
    },
    color: {
      default: {
        light: 'border-gray-300 bg-gray-100',
        dark: 'dark:border-gray-900 dark:bg-gray-800',
      },
      info: {
        light: 'border-blue-300 bg-blue-100',
        dark: 'dark:border-blue-900 dark:bg-blue-800',
      },
      failure: {
        light: 'border-red-300 bg-red-100',
        dark: 'dark:border-red-900 dark:bg-red-800',
      },
      success: {
        light: 'border-green-300 bg-green-100',
        dark: 'dark:border-green-900 dark:bg-green-800',
      },
      warning: {
        light: 'border-yellow-300 bg-yellow-100',
        dark: 'dark:border-yellow-900 dark:bg-yellow-800',
      },
      primary: {
        light: 'border-primary-300 bg-primary-100',
        dark: 'dark:border-primary-900 dark:bg-primary-800',
      },
    },
  },
});
