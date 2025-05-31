import type { FlowbiteCardColors } from '../card/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteCardHeaderColors extends FlowbiteCardColors {
  [key: string]: string;
}

export interface FlowbiteCardHeaderTheme {
  host: FlowbiteCardHeaderHostTheme;
}

export interface FlowbiteCardHeaderHostTheme {
  base: string;
  color: FlowbiteCardHeaderColors;
}

export const flowbiteCardHeaderTheme: FlowbiteCardHeaderTheme = createTheme({
  host: {
    base: 'mb-2 text-2xl font-bold tracking-tight',
    color: {
      gray: 'text-gray-900 dark:text-white',
    },
  },
});
