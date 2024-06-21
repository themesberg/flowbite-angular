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
  isRounded: keyof FlowbiteBoolean;
  hasBorder: keyof FlowbiteBoolean;
  isFixed: keyof FlowbiteBoolean;
  customStyle: Partial<NavbarBaseTheme>;
};

export type NavbarBaseTheme = {
  root: Partial<NavbarRootTheme>;
};

export type NavbarRootTheme = {
  base: string;
  color: Record<keyof NavbarColors, string>;
  isRounded: Record<keyof FlowbiteBoolean, string>;
  hasBorder: Record<keyof FlowbiteBoolean, string>;
  isFixed: Record<keyof FlowbiteBoolean, string>;
};

export const navbarTheme: NavbarBaseTheme = {
  root: {
    base: 'flex flex-wrap items-center justify-between p-4',
    color: {
      gray: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    },
    isRounded: {
      enabled: 'rounded',
      disabled: '',
    },
    hasBorder: {
      enabled: 'border',
      disabled: '',
    },
    isFixed: {
      enabled: 'sticky w-full z-20 top-0 start-0 border-b',
      disabled: '',
    },
  },
};

export type NavbarClass = FlowbiteClass;

export const NavbarClassInstance: NavbarClass = {
  rootClass: '',
};
