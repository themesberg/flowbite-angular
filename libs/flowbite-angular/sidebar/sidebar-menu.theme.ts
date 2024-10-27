import type { SidebarColors, SidebarDisplayMode } from './sidebar.theme';

import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

export interface SidebarMenuProperties {
  isOpen: keyof FlowbiteBoolean;
  color: keyof SidebarColors;
  displayMode: keyof SidebarDisplayMode;
  customStyle: DeepPartial<SidebarMenuTheme>;
}

export interface SidebarMenuTheme {
  root: {
    base: string;
    displayMode: SidebarDisplayMode;
    isOpen: FlowbiteBoolean;
    color: SidebarColors;
  };
}

export const sidebarMenuTheme: SidebarMenuTheme = createTheme({
  root: {
    base: 'flex-col min-h-full overflow-y-auto shrink-0 pr-1 border-r bg-white dark:bg-gray-800',
    displayMode: {
      push: '',
      over: 'sticky top-0 z-50',
      backdrop: 'sticky top-0 z-50',
    },
    isOpen: {
      enabled: 'flex',
      disabled: 'hidden',
    },
    color: {
      primary: 'border-primary-200 dark:border-primary-700',
      dark: 'border-gray-200 dark:border-gray-800',
      blue: 'border-blue-200 dark:border-blue-700',
      red: 'border-red-200 dark:border-red-700',
      green: 'border-green-200 dark:border-green-700',
      yellow: 'border-yellow-200 dark:border-yellow-700',
    },
  },
});

export type SidebarMenuClass = FlowbiteClass;
