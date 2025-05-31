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
    base: 'overflow-hidden',
    size: {
      xs: 'h-2.5 w-2.5',
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
    color: {
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
