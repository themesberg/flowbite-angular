import type { SidebarColors } from './sidebar.theme';

import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `SidebarItemGroupComponent`
 */
export interface SidebarItemGroupProperties {
  color: keyof SidebarColors;
  isOpen: keyof FlowbiteBoolean;
  customStyle: DeepPartial<SidebarItemGroupTheme>;
}

/**
 * Theme definition for `SidebarItemGroupComponent`
 */
export interface SidebarItemGroupTheme {
  root: {
    base: string;
  };
  buttonText: {
    base: string;
    color: SidebarColors;
  };
  list: {
    base: string;
    isOpen: FlowbiteBoolean;
  };
}

/**
 * Default theme for `SidebarItemGroupComponent`
 */
export const sidebarItemGroupTheme: SidebarItemGroupTheme = createTheme({
  root: {
    base: 'flex flex-col py-2 font-semibold cursor-pointer',
  },
  buttonText: {
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
  list: {
    base: 'py-2 space-y-2',
    isOpen: {
      enabled: '',
      disabled: 'hidden',
    },
  },
});

/**
 * Generated class definition for `SidebarItemGroupComponent`
 */
export interface SidebarItemGroupClass extends FlowbiteClass {
  buttonClass: string;
  listClass: string;
}
