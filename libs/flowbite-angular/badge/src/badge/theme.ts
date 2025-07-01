import type {
  ColorToTheme,
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbiteSizes,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteBadgeColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteBadgeSizes extends Pick<FlowbiteSizes, 'xs' | 'sm'> {
  [key: string]: string;
}

export interface FlowbiteBadgeTheme {
  host: FlowbiteBadgeHostTheme;
}

export interface FlowbiteBadgeHostTheme {
  base: string;
  transition: string;
  color: FlowbiteBadgeColors;
  border: FlowbiteBoolean;
  size: FlowbiteBadgeSizes;
  pill: FlowbiteBoolean;
}

export const flowbiteBadgeTheme: FlowbiteBadgeTheme = createTheme({
  host: {
    base: 'inline-flex items-center justify-center font-medium',
    transition: '',
    border: {
      on: 'border',
      off: 'border-0',
    },
    color: {
      default: {
        light: 'border-gray-300 bg-gray-100 text-gray-800',
        dark: 'dark:border-gray-600 dark:bg-gray-600 dark:text-gray-300',
      },
      info: {
        light: 'border-blue-300 bg-blue-100 text-blue-800',
        dark: 'dark:border-blue-900 dark:bg-blue-800 dark:text-blue-100',
      },
      failure: {
        light: 'border-red-300 bg-red-100 text-red-800',
        dark: 'dark:border-red-900 dark:bg-red-800 dark:text-red-100',
      },
      success: {
        light: 'border-green-300 bg-green-100 text-green-800',
        dark: 'dark:border-green-900 dark:bg-green-800 dark:text-green-100',
      },
      warning: {
        light: 'border-yellow-300 bg-yellow-100 text-yellow-800',
        dark: 'dark:border-yellow-900 dark:bg-yellow-800 dark:text-yellow-100',
      },
      primary: {
        light: 'bg-primary-100 text-primary-800 border-primary-300',
        dark: 'dark:text-primary-100 dark:bg-primary-800 dark:border-primary-900',
      },
    },
    pill: {
      on: 'rounded-full',
      off: 'rounded',
    },
    size: {
      xs: 'p-1 text-xs',
      sm: 'p-1.5 text-sm',
    },
  },
});
