import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `NavbarBrandComponent`
 */
export interface NavbarBrandProperties {
  customStyle: DeepPartial<NavbarBrandTheme>;
}

/**
 * Theme definition for `NavbarBrandComponent`
 */
export interface NavbarBrandTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme for `NavbarBrandComponent`
 */
export const navbarBrandTheme: NavbarBrandTheme = createTheme({
  root: {
    base: 'cursor-pointer flex items-center space-x-3 rtl:space-x-reverse',
  },
});

/**
 * Generated class definition for `NavbarBrandComponent`
 */
export type NavbarBrandClass = FlowbiteClass;
