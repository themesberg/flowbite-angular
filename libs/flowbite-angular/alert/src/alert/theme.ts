import type { FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteAlertColors
  extends Pick<FlowbiteColors, 'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow'> {
  [key: string]: string;
}

export interface FlowbiteAlertTheme {
  host: FlowbiteAlertHostTheme;
}

export interface FlowbiteAlertHostTheme {
  base: string;
  color: FlowbiteAlertColors;
  border: FlowbiteBoolean;
  accent: FlowbiteBoolean;
}

export const flowbiteAlertTheme: FlowbiteAlertTheme = createTheme({
  host: {
    base: 'mb-4 rounded-lg p-4 text-sm',
    color: {
      primary:
        'border-primary-300 bg-primary-50 text-primary-800 dark:border-primary-800 dark:bg-primary-50 dark:text-primary-400',
      dark: 'border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300',
      blue: 'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400',
      red: 'border-red-300 bg-red-100 text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400',
      green:
        'border-green-300 bg-green-100 text-green-800 dark:border-green-800 dark:bg-gray-800 dark:text-green-400',
      yellow:
        'border-yellow-300 bg-yellow-100 text-yellow-800 dark:border-yellow-800 dark:bg-gray-800 dark:text-yellow-300',
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
