import type { ColorToTheme, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteTooltipColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteTooltipTheme {
  host: FlowbiteTooltipHostTheme;
}

export interface FlowbiteTooltipHostTheme {
  base: string;
  transition: string;
  color: FlowbiteTooltipColors;
}

export const flowbiteTooltipTheme: FlowbiteTooltipTheme = createTheme({
  host: {
    base: 'absolute z-10 inline-block rounded-lg border p-3 py-2 text-sm font-medium shadow-xs',
    transition: '',
    color: {
      default: {
        light: 'border-gray-200 bg-gray-100 text-gray-900',
        dark: 'dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100',
      },
      info: {
        light: 'border-blue-200 bg-gray-100 text-gray-900',
        dark: 'dark:border-blue-800 dark:bg-gray-900 dark:text-gray-100',
      },
      failure: {
        light: 'border-red-200 bg-gray-100 text-gray-900',
        dark: 'dark:border-red-800 dark:bg-gray-900 dark:text-gray-100',
      },
      success: {
        light: 'border-green-200 bg-gray-100 text-gray-900',
        dark: 'dark:border-green-800 dark:bg-gray-900 dark:text-gray-100',
      },
      warning: {
        light: 'border-yellow-200 bg-gray-100 text-gray-900',
        dark: 'dark:border-yellow-800 dark:bg-gray-900 dark:text-gray-100',
      },
      primary: {
        light: 'border-primary-200 bg-gray-100 text-gray-900',
        dark: 'dark:border-primary-800 dark:bg-gray-900 dark:text-gray-100',
      },
    },
  },
});
