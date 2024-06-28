import { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface NavbarBrandProperties {
  customStyle: DeepPartial<NavbarBrandBaseTheme>;
}

export interface NavbarBrandBaseTheme {
  base: string;
}

export const navbarBrandTheme: NavbarBrandBaseTheme = createTheme({
  base: 'cursor-pointer flex items-center space-x-3 rtl:space-x-reverse',
});

export type NavbarBrandClass = FlowbiteClass;

export const NavbarBrandClassInstance: NavbarBrandClass = {
  rootClass: '',
};
