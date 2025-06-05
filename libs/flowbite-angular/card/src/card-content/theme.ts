import type { FLowbiteCardColors, FlowbiteCardSizes } from '../card/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteCardContentTheme {
  host: FlowbiteCardContentHostTheme;
}

export interface FlowbiteCardContentHostTheme {
  base: string;
  color: FLowbiteCardColors;
  size: FlowbiteCardSizes;
}

export const flowbiteCardContentTheme: FlowbiteCardContentTheme = createTheme({
  host: {
    base: 'p-6 font-normal',
    color: {
      default: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-400',
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
