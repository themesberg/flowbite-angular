import type { ColorToTheme, FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteCardOrientation {
  vertical: string;
  horizontal: string;
}

export interface FLowbiteCardColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteCardSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteCardTheme {
  host: FlowbiteCardHostTheme;
}

export interface FlowbiteCardHostTheme {
  base: string;
  transition: string;
  orientation: FlowbiteCardOrientation;
  color: FLowbiteCardColors;
  size: FlowbiteCardSizes;
}

export const flowbiteCardTheme: FlowbiteCardTheme = createTheme({
  host: {
    base: 'flex size-fit rounded-lg border shadow-sm',
    transition: '',
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    color: {
      default: {
        light: 'border-gray-100 bg-white shadow-gray-100',
        dark: 'dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-800',
      },
      info: {
        light: 'border-blue-100 bg-white shadow-blue-100',
        dark: 'dark:border-blue-900 dark:bg-gray-900 dark:shadow-blue-900',
      },
      failure: {
        light: 'border-red-100 bg-white shadow-red-100',
        dark: 'dark:border-red-900 dark:bg-gray-900 dark:shadow-red-900',
      },
      success: {
        light: 'border-green-100 bg-white shadow-green-100',
        dark: 'dark:border-green-900 dark:bg-gray-900 dark:shadow-green-900',
      },
      warning: {
        light: 'border-yellow-100 bg-white shadow-yellow-100',
        dark: 'dark:border-yellow-900 dark:bg-gray-900 dark:shadow-yellow-900',
      },
      primary: {
        light: 'border-primary-100 shadow-primary-100 bg-white',
        dark: 'dark:border-primary-900 dark:shadow-primary-900 dark:bg-gray-900',
      },
    },
    size: {
      xs: 'w-xs',
      sm: 'w-sm',
      md: 'w-md',
      lg: 'w-lg',
      xl: 'w-xl',
    },
  },
});
