import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteIndicatorColors
  extends Pick<
    FlowbiteColors,
    'primary' | 'dark' | 'gray' | 'blue' | 'green' | 'red' | 'purple' | 'indigo' | 'yellow' | 'teal'
  > {
  [key: string]: string;
}

export interface FlowbiteIndicatorSizes
  extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [ket: string]: string;
}

export interface FlowbiteIndicatorTheme {
  host: FlowbiteIndicatorHostTheme;
}

export interface FlowbiteIndicatorHostTheme {
  base: string;
  color: FlowbiteIndicatorColors;
  size: FlowbiteIndicatorSizes;
  rounded: FlowbiteBoolean;
}

export const flowbiteIndicatorTheme: FlowbiteIndicatorTheme = createTheme({
  host: {
    base: 'inline-flex shrink-0 items-center justify-center font-bold',
    color: {
      dark: 'border-white bg-gray-900 text-white dark:border-gray-800 dark:bg-gray-700',
      primary: 'bg-primary-500 border-white text-white dark:border-gray-800',
      gray: 'border-white bg-gray-200 text-gray-900 dark:border-gray-800',
      blue: 'border-white bg-blue-600 text-white dark:border-gray-800',
      green: 'border-white bg-green-500 text-white dark:border-gray-800',
      red: 'border-white bg-red-500 text-white dark:border-gray-800',
      purple: 'border-white bg-purple-500 text-white dark:border-gray-800',
      indigo: 'border-white bg-indigo-500 text-white dark:border-gray-800',
      yellow: 'border-white bg-yellow-300 text-gray-900 dark:border-gray-800',
      teal: 'border-white bg-teal-500 text-white dark:border-gray-800',
    },
    size: {
      xs: 'h-2 w-2 text-xs',
      sm: 'h-2.5 w-2.5 text-sm',
      md: 'h-3 w-3 text-sm',
      lg: 'h-3.5 w-3.5 text-sm',
      xl: 'h-6 w-6 text-sm',
    },
    rounded: {
      on: 'rounded-full',
      off: 'rounded',
    },
  },
});
