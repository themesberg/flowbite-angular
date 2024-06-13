import {
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbiteColors,
} from '../../common/flowbite.theme';

//#region Component theme option
export type NavbarColors = Pick<FlowbiteColors, 'gray'> & {
  [key: string]: string;
};
//#endregion

export type NavbarProperties = {
  rounded: keyof FlowbiteBoolean;
  border: keyof FlowbiteBoolean;
  fixed: keyof FlowbiteBoolean;
  customStyle: Partial<NavbarBaseTheme>;
};

export type NavbarBaseTheme = {
  root: Partial<NavbarRootTheme>;
  content: Partial<NavbarContentTheme>;
};

export type NavbarRootTheme = {
  base: string;
  color: Record<keyof NavbarColors, string>;
  rounded: Record<keyof FlowbiteBoolean, string>;
  border: Record<keyof FlowbiteBoolean, string>;
  fixed: Record<keyof FlowbiteBoolean, string>;
};

export type NavbarContentTheme = {
  base: string;
};

export const navbarTheme: NavbarBaseTheme = {
  root: {
    base: 'bg-white border-gray-200 dark:bg-gray-900',
    color: {
      gray: 'bg-white border-gray-200 dark:border-gray-700 dark:bg-gray-800',
    },
    rounded: {
      enabled: 'rounded',
      disabled: '',
    },
    border: {
      enabled: 'border',
      disabled: '',
    },
    fixed: {
      enabled: 'sticky w-full z-20 top-0 start-0 border-b',
      disabled: '',
    },
  },
  content: {
    base: 'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4',
  },
};

export type NavbarClass = FlowbiteClass & {
  contentClass: string;
};

export const NavbarClassInstance: NavbarClass = {
  contentClass: '',
  rootClass: '',
};
