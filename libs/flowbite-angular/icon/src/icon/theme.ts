import type { ColorToTheme, FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteIconSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteIconColors extends Omit<FlowbiteColors, 'default'> {
  [key: string]: ColorToTheme;
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
      info: {
        light: 'text-blue-500',
        dark: '',
      },
      failure: {
        light: 'text-red-500',
        dark: '',
      },
      success: {
        light: 'text-green-500',
        dark: '',
      },
      warning: {
        light: 'text-yellow-500',
        dark: '',
      },
      primary: {
        light: 'text-primary-500',
        dark: '',
      },
      dark: {
        light: 'text-gray-700',
        dark: '',
      },
      light: {
        light: 'text-gray-300',
        dark: '',
      },
      blue: {
        light: 'text-blue-500',
        dark: '',
      },
      cyan: {
        light: 'text-cyan-500',
        dark: '',
      },
      gray: {
        light: 'text-gray-500',
        dark: '',
      },
      green: {
        light: 'text-green-500',
        dark: '',
      },
      indigo: {
        light: 'text-indigo-500',
        dark: '',
      },
      lime: {
        light: 'text-lime-500',
        dark: '',
      },
      pink: {
        light: 'text-pink-500',
        dark: '',
      },
      purple: {
        light: 'text-purple-500',
        dark: '',
      },
      red: {
        light: 'text-red-500',
        dark: '',
      },
      teal: {
        light: 'text-teal-500',
        dark: '',
      },
      yellow: {
        light: 'text-yellow-500',
        dark: '',
      },
    },
    strokeWidth: {
      sm: 'stroke-1',
      md: 'stroke-2',
      lg: 'stroke-3',
    },
  },
});
