import { FlowbiteClass } from '../../common';

export interface NavbarBrandProperties {
  customStyle: Partial<NavbarBrandBaseTheme>;
}

export interface NavbarBrandBaseTheme {
  root: Partial<NavbarBrandRootTheme>;
}

export interface NavbarBrandRootTheme {
  base: string;
}

export const navbarBrandTheme: NavbarBrandBaseTheme = {
  root: {
    base: 'flex items-center space-x-3 rtl:space-x-reverse',
  },
};

export interface NavbarBrandClass extends FlowbiteClass {
  navbarBrandClass: string;
}

export const NavbarBrandClassInstance: NavbarBrandClass = {
  navbarBrandClass: '',
  rootClass: '',
};
