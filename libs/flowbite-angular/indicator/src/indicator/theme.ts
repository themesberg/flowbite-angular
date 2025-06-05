import type {
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbitePositions,
  FlowbiteSizes,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteIndicatorColors extends FlowbiteColors {
  [key: string]: string;
}

export interface FlowbiteIndicatorSizes
  extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteIndicatorPositions extends FlowbitePositions {
  [key: string]: string;
}

export interface FlowbiteIndicatorTheme {
  host: FlowbiteIndicatorHostTheme;
}

export interface FlowbiteIndicatorHostTheme {
  base: string;
  border: FlowbiteBoolean;
  color: FlowbiteIndicatorColors;
  size: FlowbiteIndicatorSizes;
  position: FlowbiteIndicatorPositions;
}

export const flowbiteIndicatorTheme: FlowbiteIndicatorTheme = createTheme({
  host: {
    base: 'inline-flex shrink-0 items-center justify-center rounded-full font-bold',
    border: {
      on: 'border-2',
      off: 'border-none',
    },
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
      sm: 'h-3 w-3 text-sm',
      md: 'h-4 w-4 text-sm',
      lg: 'h-5 w-5 text-sm',
      xl: 'h-6 w-6 text-sm',
    },
    position: {
      'top-left': 'top-0 left-0 -translate-x-1/3 -translate-y-1/3',
      'top-center': 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/3',
      'top-right': 'top-0 right-0 translate-x-1/3 -translate-y-1/3',
      'center-left': 'top-1/2 left-0 -translate-x-1/3 -translate-y-1/2',
      center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      'center-right': 'top-1/2 right-0 translate-x-1/3 -translate-y-1/2',
      'bottom-left': 'bottom-0 left-0 -translate-x-1/3 translate-y-1/3',
      'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3',
      'bottom-right': 'right-0 bottom-0 translate-x-1/3 translate-y-1/3',
    },
  },
});
