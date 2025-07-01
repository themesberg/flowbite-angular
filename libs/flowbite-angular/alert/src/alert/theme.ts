import type { ColorToTheme, FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteAlertColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteAlertTheme {
  host: FlowbiteAlertHostTheme;
}

export interface FlowbiteAlertHostTheme {
  base: string;
  transition: string;
  color: FlowbiteAlertColors;
  border: FlowbiteBoolean;
  accent: FlowbiteBoolean;
}

export const flowbiteAlertTheme: FlowbiteAlertTheme = createTheme({
  host: {
    base: 'mb-4 rounded-lg p-4',
    transition: '',
    color: {
      default: {
        light: 'border-gray-200 bg-gray-50',
        dark: 'dark:border-gray-700 dark:bg-gray-800',
      },
      info: {
        light: 'border-blue-200 bg-blue-50',
        dark: 'dark:border-blue-700 dark:bg-blue-800',
      },
      failure: {
        light: 'border-red-200 bg-red-50',
        dark: 'dark:border-red-700 dark:bg-red-800',
      },
      success: {
        light: 'border-green-200 bg-green-50',
        dark: 'dark:border-green-700 dark:bg-green-800',
      },
      warning: {
        light: 'border-yellow-200 bg-yellow-50',
        dark: 'dark:border-yellow-700 dark:bg-yellow-800',
      },
      primary: {
        light: 'bg-primary-50 border-primary-200',
        dark: 'dark:bg-primary-800 dark:border-primary-700',
      },
    },
    border: {
      on: 'border',
      off: 'border-0',
    },
    accent: {
      on: 'border-t-4',
      off: '',
    },
  },
});
