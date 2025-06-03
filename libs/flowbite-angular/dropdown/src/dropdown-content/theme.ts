import type { FLowbiteDropdownColors } from '../dropdown/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteDropdownContentTheme {
  host: FlowbiteDropdownContentHostTheme;
}

export interface FlowbiteDropdownContentHostTheme {
  base: string;
  color: FLowbiteDropdownColors;
}

export const flowbiteDropdownContentTheme: FlowbiteDropdownContentTheme = createTheme({
  host: {
    base: 'py-2 text-sm',
    color: {
      gray: 'text-gray-700 dark:text-gray-200',
    },
  },
});
