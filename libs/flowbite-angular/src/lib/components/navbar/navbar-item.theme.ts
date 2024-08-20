import type { DeepPartial } from '../../common';
import type { FlowbiteClass } from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';
import type { NavbarColors } from './navbar.theme';

export interface NabvarItemProperties {
  color: keyof NavbarColors;
  customStyle: DeepPartial<NavbarItemTheme>;
}

export interface NavbarItemTheme {
  root: {
    base: string;
    color: NavbarColors;
  };
}

export const navbarItemTheme: NavbarItemTheme = createTheme({
  root: {
    base: 'cursor-pointer block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
    color: {
      primary: 'md:hover:text-primary-700 md:dark:hover:text-primary-500',
      gray: 'md:hover:text-gray-700 md:dark:hover:text-gray-500',
    },
  },
});

export type NavbarItemClass = FlowbiteClass;
