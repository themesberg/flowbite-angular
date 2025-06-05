import type { FlowbiteTabColors } from '../tab/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteTabListTheme {
  host: FlowbiteTabListHostTheme;
}

export interface FlowbiteTabListHostTheme {
  base: string;
  color: FlowbiteTabColors;
}

export const flowbiteTabListTheme: FlowbiteTabListTheme = createTheme({
  host: {
    base: 'flex overflow-x-scroll overflow-y-clip border-b text-center',
    color: {
      default: 'border-gray-200 dark:border-gray-700',
    },
  },
});
