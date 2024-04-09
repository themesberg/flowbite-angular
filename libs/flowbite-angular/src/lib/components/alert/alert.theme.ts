import { FlowbiteBoolean, FlowbiteColors } from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface AlertProperties {
  color: keyof AlertColors;
  rounded: keyof FlowbiteBoolean;
  borderAccent: keyof FlowbiteBoolean;
  customStyle: Partial<AlertBaseTheme>;
}

export interface AlertBaseTheme {
  root: Partial<AlertRootTheme>;
  button: Partial<AlertButtonTheme>;
}

export interface AlertRootTheme {
  base: string;
  color: Record<keyof AlertColors, string>;
  border: Record<keyof FlowbiteBoolean, string>;
  rounded: Record<keyof FlowbiteBoolean, string>;
}

export interface AlertButtonTheme {
  base: string;
  color: Record<keyof AlertColors, string>;
}

export interface AlertColors
  extends Pick<FlowbiteColors, 'blue' | 'red' | 'green' | 'yellow' | 'gray'> {
  [key: string]: string;
}

export const alertTheme: AlertBaseTheme = {
  root: {
    base: 'flex flex-col gap-2 p-4 text-sm',
    color: {
      blue: 'text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800',
      red: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
      green:
        'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
      yellow:
        'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
      gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
    },
    border: {
      enabled: 'border-t-4',
      disabled: '',
    },
    rounded: {
      enabled: 'rounded-lg',
      disabled: '',
    },
  },
  button: {
    base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
    color: {
      blue: 'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300',
      red: 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300',
      green:
        'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300',
      yellow:
        'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300',
      gray: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
    },
  },
};

export interface AlertClass {
  alertClass: string;
  alertButtonClass: string;
}

export function getClasses(properties: AlertProperties): AlertClass {
  const theme: AlertBaseTheme = mergeTheme(alertTheme, properties.customStyle);

  const output: AlertClass = {
    alertClass: twMerge(
      theme.root.base,
      theme.root.border![properties.borderAccent],
      theme.root.color![properties.color],
      theme.root.rounded![properties.rounded],
    ),
    alertButtonClass: twMerge(
      theme.button.base,
      theme.button.color![properties.color],
    ),
  };

  return output;
}
