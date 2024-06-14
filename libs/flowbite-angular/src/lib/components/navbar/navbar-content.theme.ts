import { FlowbiteBoolean, FlowbiteClass } from '../../common';

export type NavbarContentProperties = {
  isOpen: keyof FlowbiteBoolean;
  customStyle: Partial<NavbarContentBaseTheme>;
};

export type NavbarContentBaseTheme = {
  root: Partial<NavbarContentRootTheme>;
  list: Partial<NavBarContentListTheme>;
};

export type NavbarContentRootTheme = {
  base: string;
  open: Record<keyof FlowbiteBoolean, string>;
};

export type NavBarContentListTheme = {
  base: string;
};

export const navbarContentTheme: NavbarContentBaseTheme = {
  root: {
    base: 'w-full md:block md:w-auto order-last md:order-none',
    open: {
      enabled: '',
      disabled: 'hidden',
    },
  },
  list: {
    base: 'font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700',
  },
};

export type NavbarContentClass = FlowbiteClass & {
  navbarContentListClass: string;
};

export const NavbarContentClassInstance: NavbarContentClass = {
  navbarContentListClass: '',
  rootClass: '',
};
