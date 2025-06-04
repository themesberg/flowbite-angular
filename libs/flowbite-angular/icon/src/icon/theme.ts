import type { FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteIconSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteIconColors extends FlowbiteColors {
  [key: string]: string;
}

export interface FlowbiteIconStrokeWidths extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface FlowbiteIconTheme {
  host: FlowbiteIconHostTheme;
}

export interface FlowbiteIconHostTheme {
  base: string;
  size: FlowbiteIconSizes;
  color: FlowbiteIconColors;
  strokeWidth: FlowbiteIconStrokeWidths;
}

export const flowbiteIconTheme: FlowbiteIconTheme = createTheme({
  host: {
    base: 'self-center overflow-hidden',
    size: {
      xs: 'size-2.5',
      sm: 'size-3',
      md: 'size-4',
      lg: 'size-5',
      xl: 'size-6',
    },
    color: {
      default: 'text-gray-800 dark:text-gray-300',
      info: 'text-blue-500',
      failure: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      primary: 'text-primary-500',
      dark: 'text-gray-700',
      light: 'text-gray-300',
      blue: 'text-blue-500',
      cyan: 'text-cyan-500',
      gray: 'text-gray-500',
      green: 'text-green-500',
      indigo: 'text-indigo-500',
      lime: 'text-lime-500',
      pink: 'text-pink-500',
      purple: 'text-purple-500',
      red: 'text-red-500',
      teal: 'text-teal-500',
      yellow: 'text-yellow-500',
    },
    strokeWidth: {
      sm: 'stroke-1',
      md: 'stroke-2',
      lg: 'stroke-3',
    },
  },
});
