import type { FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteIconSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface FlowbiteIconColors extends Pick<FlowbiteColors, 'primary' | 'dark' | 'light'> {
  [key: string]: string;
}

export interface FlowbiteIconStrokeWidths {
  sm: string;
  md: string;
  lg: string;
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
    base: 'inline-block overflow-hidden',
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-6 w-6',
    },
    color: {
      primary: 'text-primary-500',
      dark: 'text-gray-300',
      light: 'text-gray-700',
    },
    strokeWidth: {
      sm: 'stroke-1',
      md: 'stroke-2',
      lg: 'stroke-3',
    },
  },
});
