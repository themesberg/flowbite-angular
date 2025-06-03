import type { FLowbiteDropdownColors } from '../dropdown/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteDropdownItemTheme {
  host: FlowbiteDropdownItemHostTheme;
}

export interface FlowbiteDropdownItemHostTheme {
  base: string;
  transition: string;
  color: FLowbiteDropdownColors;
  children: {
    base: string;
    icon: {
      base: string;
    };
  };
}

export const flowbiteDropdownItemTheme: FlowbiteDropdownItemTheme = createTheme({
  host: {
    base: 'flex cursor-pointer px-4 py-2 font-medium',
    transition: 'transition-colors duration-150 ease-in-out',
    color: {
      gray: 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
    },
    children: {
      base: '*:not-[flowbite-icon]:flex-1',
      icon: {
        base: '*:[flowbite-icon]:first:mr-2',
      },
    },
  },
});
