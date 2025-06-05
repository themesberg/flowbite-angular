import type { FlowbiteTabColors } from '../tab/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteTabContentTheme {
  host: FlowbiteTabContentHostTheme;
}

export interface FlowbiteTabContentHostTheme {
  base: string;
  color: FlowbiteTabColors;
}

export const flowbiteTabContentTheme: FlowbiteTabContentTheme = createTheme({
  host: {
    base: 'p-6 not-data-active:hidden',
    color: {
      default: 'text-gray-900 dark:text-gray-100',
    },
  },
});
