import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `NavbarContentComponent`
 */
export interface NavbarContentProperties {
  customStyle: DeepPartial<NavbarContentTheme>;
}

/**
 * Theme definition for `NavbarContentComponent`
 */
export interface NavbarContentTheme {
  root: {
    base: string;
  };
  list: {
    base: string;
  };
}

/**
 * Default theme for `NavbarContentComponent`
 */
export const navbarContentTheme: NavbarContentTheme = createTheme({
  root: {
    base: 'w-full md:!h-fit md:w-auto order-last md:order-none overflow-hidden',
  },
  list: {
    base: 'font-medium flex flex-col p-4 md:p-0 mt-4 items-center border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-800 dark:border-gray-700',
  },
});

/**
 * Generated class definition for `NavbarContentComponent`
 */
export interface NavbarContentClass extends FlowbiteClass {
  navbarContentListClass: string;
}
