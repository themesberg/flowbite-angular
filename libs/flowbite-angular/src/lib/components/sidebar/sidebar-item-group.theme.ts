import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';
import type { SidebarColors } from './sidebar.theme';

export interface SidebarItemGroupProperties {
  color: keyof SidebarColors;
  customStyle: DeepPartial<SidebarItemGroupTheme>;
}

export interface SidebarItemGroupTheme {
  root: {
    base: string;
  };
  spanText: {
    base: string;
    color: SidebarColors;
  };
}

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

export interface SidebarItemGroupClass extends FlowbiteClass {
  spanClass: string;
}
