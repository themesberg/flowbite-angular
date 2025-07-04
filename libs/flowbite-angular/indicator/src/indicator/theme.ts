import type {
  ColorToTheme,
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbitePositions,
  FlowbiteSizes,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteIndicatorColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
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
  transition: string;
  border: FlowbiteBoolean;
  color: FlowbiteIndicatorColors;
  size: FlowbiteIndicatorSizes;
  position: FlowbiteIndicatorPositions;
}

export const flowbiteIndicatorTheme: FlowbiteIndicatorTheme = createTheme({
  host: {
    base: 'inline-flex shrink-0 items-center justify-center rounded-full font-bold',
    transition: '',
    border: {
      on: 'border-2',
      off: 'border-none',
    },
    color: {
      default: {
        light: 'bg-gray-500',
        dark: 'dark:bg-gray-500',
      },
      info: {
        light: 'bg-blue-500',
        dark: 'dark:bg-blue-500',
      },
      failure: {
        light: 'bg-red-500',
        dark: 'dark:bg-red-500',
      },
      success: {
        light: 'bg-green-500',
        dark: 'dark:bg-green-500',
      },
      warning: {
        light: 'bg-yellow-500',
        dark: 'dark:bg-yellow-500',
      },
      primary: {
        light: 'bg-primary-500',
        dark: 'dark:bg-primary-500',
      },
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
