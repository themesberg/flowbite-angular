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
        light: 'border-gray-200 bg-white shadow-gray-300',
        dark: 'dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-600',
      },
      info: {
        light: '',
        dark: '',
      },
      failure: {
        light: '',
        dark: '',
      },
      success: {
        light: '',
        dark: '',
      },
      warning: {
        light: '',
        dark: '',
      },
      primary: {
        light: '',
        dark: '',
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
