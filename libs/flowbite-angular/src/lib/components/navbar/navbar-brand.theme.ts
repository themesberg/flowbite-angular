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
    base: 'flex items-center space-x-3 rtl:space-x-reverse',
  },
};

export type NavbarBrandClass = FlowbiteClass & {
  navbarBrandClass: string;
};

export const NavbarBrandClassInstance: NavbarBrandClass = {
  navbarBrandClass: '',
  rootClass: '',
};
