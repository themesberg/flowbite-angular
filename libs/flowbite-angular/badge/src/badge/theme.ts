import type {
  ColorToTheme,
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbiteSizes,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteBadgeColors
  extends Pick<
    FlowbiteColors,
    | 'default'
    | 'primary'
    | 'dark'
    | 'blue'
    | 'red'
    | 'green'
    | 'yellow'
    | 'indigo'
    | 'purple'
    | 'pink'
  > {
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
  color: FlowbiteBadgeColors;
  border: FlowbiteBoolean;
  size: FlowbiteBadgeSizes;
  pill: FlowbiteBoolean;
}

export const flowbiteBadgeTheme: FlowbiteBadgeTheme = createTheme({
  host: {
    base: 'inline-flex items-center justify-center font-medium',
    border: {
      on: 'border',
      off: 'border-0',
    },
    color: {
      default: {
        light: 'border-gray-300 bg-gray-100 text-gray-800',
        dark: 'dark:border-gray-600 dark:bg-gray-600 dark:text-gray-300',
      },
      primary: {
        light: 'bg-primary-100 dark:bg-primary-200 text-primary-800',
        dark: 'dark:text-primary-900 border-primary-300 dark:border-primary-800',
      },
      dark: {
        light: 'border-gray-300 bg-gray-100 text-gray-800',
        dark: 'dark:border-gray-600 dark:bg-gray-600 dark:text-gray-300',
      },
      blue: {
        light: 'border-blue-300 bg-blue-100 text-blue-800',
        dark: 'dark:border-blue-800 dark:bg-blue-200 dark:text-blue-800',
      },
      red: {
        light: 'border-red-300 bg-red-100 text-red-800',
        dark: 'dark:border-red-800 dark:bg-red-200 dark:text-red-900',
      },
      green: {
        light: 'border-green-300 bg-green-100 text-green-800',
        dark: 'dark:border-green-800 dark:bg-green-200 dark:text-green-900',
      },
      yellow: {
        light: 'border-yellow-300 bg-yellow-100 text-yellow-800',
        dark: 'dark:border-yellow-800 dark:bg-yellow-200 dark:text-yellow-900',
      },
      indigo: {
        light: 'border-indigo-300 bg-indigo-100 text-indigo-800',
        dark: 'dark:border-indigo-800 dark:bg-indigo-200 dark:text-indigo-900',
      },
      purple: {
        light: 'border-purple-300 bg-purple-100 text-purple-800',
        dark: 'dark:border-purple-800 dark:bg-purple-200 dark:text-purple-900',
      },
      pink: {
        light: 'border-pink-300 bg-pink-100 text-pink-800',
        dark: 'dark:border-pink-800 dark:bg-pink-200 dark:text-pink-900',
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
