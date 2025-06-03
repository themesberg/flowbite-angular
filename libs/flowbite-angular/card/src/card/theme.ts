import type { FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteCardOrientation {
  vertical: string;
  horizontal: string;
}

export interface FLowbiteCardColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

export interface FlowbiteCardSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteCardTheme {
  host: FlowbiteCardHostTheme;
}

export interface FlowbiteCardHostTheme {
  base: string;
  orientation: FlowbiteCardOrientation;
  color: FLowbiteCardColors;
  size: FlowbiteCardSizes;
}

export const flowbiteCardTheme: FlowbiteCardTheme = createTheme({
  host: {
    base: 'flex size-fit rounded-lg border shadow-sm',
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    color: {
      gray: 'border-gray-200 bg-white shadow-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-600',
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
