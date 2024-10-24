import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface NavbarBrandProperties {
  customStyle: DeepPartial<NavbarBrandTheme>;
}

export interface NavbarBrandTheme {
  root: {
    base: string;
  };
}

export const navbarBrandTheme: NavbarBrandTheme = createTheme({
  root: {
    base: 'cursor-pointer flex items-center space-x-3 rtl:space-x-reverse',
  },
});

export type NavbarBrandClass = FlowbiteClass;
