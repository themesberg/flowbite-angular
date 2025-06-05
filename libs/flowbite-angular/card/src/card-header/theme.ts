import type { FLowbiteCardColors } from '../card/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteCardHeaderTheme {
  host: FlowbiteCardHeaderHostTheme;
}

export interface FlowbiteCardHeaderHostTheme {
  base: string;
  color: FLowbiteCardColors;
}

export const flowbiteCardHeaderTheme: FlowbiteCardHeaderTheme = createTheme({
  host: {
    base: 'mb-2 text-2xl font-bold tracking-tight',
    color: {
      default: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
    },
  },
});
