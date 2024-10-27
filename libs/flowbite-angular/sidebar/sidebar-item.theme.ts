import type { SidebarColors } from './sidebar.theme';

import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

export interface SidebarItemProperties {
  icon: string | undefined;
  color: keyof SidebarColors;
  label: string | undefined;
  customStyle: DeepPartial<SidebarItemTheme>;
}

export interface SidebarItemTheme {
  root: {
    base: string;
    color: SidebarColors;
  };
  icon: {
    base: string;
  };
}

export const sidebarItemTheme: SidebarItemTheme = createTheme({
  root: {
    base: 'group flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 dark:text-white',
    color: {
      primary:
        'aria-current:text-primary-500 dark:aria-current:text-primary-300 hover:bg-primary-200/35 dark:hover:bg-primary-700/35',
      dark: 'aria-current:text-gray-500 dark:aria-current:text-gray-300 hover:bg-gray-200/35 dark:hover:bg-gray-700/35',
      blue: 'aria-current:text-blue-500 dark:aria-current:text-blue-300 hover:bg-blue-200/35 dark:hover:bg-blue-700/35',
      red: 'aria-current:text-red-500 dark:aria-current:text-red-300 hover:bg-red-200/35 dark:hover:bg-red-700/35',
      green:
        'aria-current:text-green-500 dark:aria-current:text-green-300 hover:bg-green-200/35 dark:hover:bg-green-700/35',
      yellow:
        'aria-current:text-yellow-500 dark:aria-current:text-yellow-300 hover:bg-yellow-200/35 dark:hover:bg-yellow-700/35',
    },
  },
  icon: {
    base: 'flex-1 whitespace-nowrap',
  },
});

export interface SidebarItemClass extends FlowbiteClass {
  sidebarIconClass: string;
}
