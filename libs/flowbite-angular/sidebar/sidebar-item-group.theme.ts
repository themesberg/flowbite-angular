import type { SidebarColors } from './sidebar.theme';

import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `SidebarItemGroupComponent`
 */
export interface SidebarItemGroupProperties {
  color: keyof SidebarColors;
  customStyle: DeepPartial<SidebarItemGroupTheme>;
}

/**
 * Theme definition for `SidebarItemGroupComponent`
 */
export interface SidebarItemGroupTheme {
  root: {
    base: string;
  };
  spanText: {
    base: string;
    color: SidebarColors;
  };
}

/**
 * Default theme for `SidebarItemGroupComponent`
 */
export const sidebarItemGroupTheme: SidebarItemGroupTheme = createTheme({
  root: {
    base: 'flex flex-col py-2 font-semibold cursor-pointer',
  },
  spanText: {
    base: 'flex flex-row justify-between m-2',
    color: {
      primary: 'text-primary-600',
      dark: 'text-gray-600',
      blue: 'text-blue-600',
      red: 'text-red-600',
      green: 'text-green-600',
      yellow: 'text-yellow-600',
    },
  },
});

/**
 * Generated class definition for `SidebarItemGroupComponent`
 */
export interface SidebarItemGroupClass extends FlowbiteClass {
  spanClass: string;
}
