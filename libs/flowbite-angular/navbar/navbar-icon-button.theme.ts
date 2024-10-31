import type { NavbarColors } from './navbar.theme';

import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `NavbarIconButtonComponent`
 */
export interface NavbarIconButtonProperties {
  color: keyof NavbarColors;
  customStyle: DeepPartial<NavbarIconButtonTheme>;
}

/**
 * Theme definition for `NavbarIconButtonComponent`
 */
export interface NavbarIconButtonTheme {
  root: {
    base: string;
    color: NavbarColors;
  };
}

/**
 * Default theme for `NavbarIconButtonComponent`
 */
export const navbarIconButtonTheme: NavbarIconButtonTheme = createTheme({
  root: {
    base: 'cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
    color: {
      primary: 'text-primary-500 dark:text-primary-300',
      gray: 'text-gray-500 dark:text-gray-400',
      blue: 'text-blue-500 dark:text-blue-300',
      red: 'text-red-500 dark:text-red-300',
      green: 'text-green-500 dark:text-green-300',
      yellow: 'text-yellow-500 dark:text-yellow-300',
    },
  },
});

/**
 * Generated class definition for `NavbarIconButtonComponent`
 */
export type NavbarIconButtonClass = FlowbiteClass;
