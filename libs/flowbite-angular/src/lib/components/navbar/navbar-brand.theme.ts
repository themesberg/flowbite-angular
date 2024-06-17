import { FlowbiteClass } from '../../common';

export type NavbarBrandProperties = {
  customStyle: Partial<NavbarBrandBaseTheme>;
};

export type NavbarBrandBaseTheme = {
  root: Partial<NavbarBrandRootTheme>;
};

export type NavbarBrandRootTheme = {
  base: string;
};

export const navbarBrandTheme: NavbarBrandBaseTheme = {
  root: {
    base: 'cursor-pointer flex items-center space-x-3 rtl:space-x-reverse',
  },
};

export type NavbarBrandClass = FlowbiteClass;

export const NavbarBrandClassInstance: NavbarBrandClass = {
  rootClass: '',
};
