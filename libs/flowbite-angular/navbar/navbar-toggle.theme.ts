import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `NavbarToggleComponent`
 */
export interface NavbarToggleProperties {
  customStyle: DeepPartial<NavbarToggleTheme>;
}

/**
 * Theme definition for `NavbarToggleComponent`
 */
export interface NavbarToggleTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme for `NavbarToggleComponent`
 */
export const navbarToggleTheme: NavbarToggleTheme = createTheme({
  root: {
    base: 'cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
  },
});

/**
 * Generated class definition for `NavbarToggleComponent`
 */
export type NavbarToggleClass = FlowbiteClass;
