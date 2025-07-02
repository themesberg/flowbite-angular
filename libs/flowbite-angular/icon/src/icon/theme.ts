import type { ColorToTheme, FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteIconColors extends FlowbiteColors {
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
  transition: string;
  color: FlowbiteIconColors;
  strokeWidth: FlowbiteIconStrokeWidths;
}

export const flowbiteIconTheme: FlowbiteIconTheme = createTheme({
  host: {
    base: 'self-center overflow-hidden',
    transition: '',
    color: {
      default: {
        light: '',
        dark: '',
      },
      info: {
        light: 'text-blue-500',
        dark: 'dark:text-blue-500',
      },
      failure: {
        light: 'text-red-500',
        dark: 'dark:text-red-500',
      },
      success: {
        light: 'text-green-500',
        dark: 'dark:text-green-500',
      },
      warning: {
        light: 'text-yellow-500',
        dark: 'dark:text-yellow-500',
      },
      primary: {
        light: 'text-primary-500',
        dark: 'dark:text-primary-500',
      },
      dark: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-700',
      },
      light: {
        light: 'text-gray-300',
        dark: 'dark:text-gray-300',
      },
      blue: {
        light: 'text-blue-500',
        dark: 'dark:text-blue-500',
      },
      cyan: {
        light: 'text-cyan-500',
        dark: 'dark:text-cyan-500',
      },
      gray: {
        light: 'text-gray-500',
        dark: 'dark:text-gray-500',
      },
      green: {
        light: 'text-green-500',
        dark: 'dark:text-green-500',
      },
      indigo: {
        light: 'text-indigo-500',
        dark: 'dark:text-indigo-500',
      },
      lime: {
        light: 'text-lime-500',
        dark: 'dark:text-lime-500',
      },
      pink: {
        light: 'text-pink-500',
        dark: 'dark:text-pink-500',
      },
      purple: {
        light: 'text-purple-500',
        dark: 'dark:text-purple-500',
      },
      red: {
        light: 'text-red-500',
        dark: 'dark:text-red-500',
      },
      teal: {
        light: 'text-teal-500',
        dark: 'dark:text-teal-500',
      },
      yellow: {
        light: 'text-yellow-500',
        dark: 'dark:text-yellow-500',
      },
    },
    strokeWidth: {
      sm: 'stroke-1',
      md: 'stroke-2',
      lg: 'stroke-3',
    },
  },
});
