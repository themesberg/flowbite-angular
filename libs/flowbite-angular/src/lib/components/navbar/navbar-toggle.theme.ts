import { FlowbiteClass } from '../../common';

export type NavbarToggleProperties = {
  customStyle: Partial<NavbarToggleBaseTheme>;
};

export type NavbarToggleBaseTheme = {
  root: Partial<NavbarToggleRootTheme>;
};

export type NavbarToggleRootTheme = {
  base: string;
};

export const navbarToogleTheme: NavbarToggleBaseTheme = {
  root: {
    base: 'cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
  },
};

export type NavbarToggleClass = FlowbiteClass;

export const NavbarToggleClassInstance: NavbarToggleClass = {
  rootClass: '',
};
