import type { NavbarColors } from './navbar.theme';

import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for class generation of `NavbarItemComponent`
 */
export interface NabvarItemProperties {
  color: keyof NavbarColors;
  customStyle: DeepPartial<NavbarItemTheme>;
}

/**
 * Theme definition for `NavbarItemComponent`
 */
export interface NavbarItemTheme {
  root: {
    base: string;
    color: NavbarColors;
  };
}

/**
 * Default theme for `NavbarItemComponent`
 */
export const navbarItemTheme: NavbarItemTheme = createTheme({
  root: {
    base: 'cursor-pointer block py-2 px-3 rounded text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent',
    color: {
      primary:
        'md:hover:text-primary-700 md:dark:hover:text-primary-500 aria-current:text-primary-500 dark:aria-current:text-primary-300',
      gray: 'md:hover:text-gray-700 md:dark:hover:text-gray-500 aria-current:text-gray-500 dark:aria-current:text-gray-300',
    },
  },
});

/**
 * Generated class definition for `NavbarItemComponent`
 */
export type NavbarItemClass = FlowbiteClass;
