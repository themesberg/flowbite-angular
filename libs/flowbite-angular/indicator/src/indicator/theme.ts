import type { FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteIndicatorColors extends FlowbiteColors {
  [key: string]: string;
}

export interface FlowbiteIndicatorSizes
  extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteIndicatorTheme {
  host: FlowbiteIndicatorHostTheme;
}

export interface FlowbiteIndicatorHostTheme {
  base: string;
  color: FlowbiteIndicatorColors;
  size: FlowbiteIndicatorSizes;
}

export const flowbiteIndicatorTheme: FlowbiteIndicatorTheme = createTheme({
  host: {
    base: 'inline-flex shrink-0 items-center justify-center rounded-full font-bold',
    color: {
      default: 'border-white bg-gray-200 text-gray-900 dark:border-gray-800',
      info: 'border-white bg-blue-500 text-white dark:border-blue-800',
      failure: 'border-white bg-red-500 text-white dark:border-red-800',
      success: 'border-white bg-green-500 text-white dark:border-green-800',
      warning: 'border-white bg-yellow-500 text-white dark:border-yellow-800',
      primary: 'bg-primary-500 dark:border-primary-800 border-white text-white',
      dark: 'border-white bg-gray-900 text-white dark:border-gray-800',
      light: 'border-white bg-gray-300 text-white dark:border-gray-600',
      blue: 'border-white bg-blue-600 text-white dark:border-blue-800',
      cyan: 'border-white bg-cyan-500 text-white dark:border-cyan-800',
      gray: 'border-white bg-gray-200 text-gray-900 dark:border-gray-800',
      green: 'border-white bg-green-500 text-white dark:border-green-800',
      indigo: 'border-white bg-indigo-500 text-white dark:border-indigo-800',
      lime: 'border-white bg-lime-500 text-white dark:border-lime-800',
      pink: 'border-white bg-pink-500 text-white dark:border-pink-800',
      purple: 'border-white bg-purple-500 text-white dark:border-purple-800',
      red: 'border-white bg-red-500 text-white dark:border-red-800',
      teal: 'border-white bg-teal-500 text-white dark:border-teal-800',
      yellow: 'border-white bg-yellow-300 text-gray-900 dark:border-yellow-800',
    },
    size: {
      xs: 'h-2 w-2 text-xs',
      sm: 'h-2.5 w-2.5 text-sm',
      md: 'h-3 w-3 text-sm',
      lg: 'h-3.5 w-3.5 text-sm',
      xl: 'h-6 w-6 text-sm',
    },
  },
});
