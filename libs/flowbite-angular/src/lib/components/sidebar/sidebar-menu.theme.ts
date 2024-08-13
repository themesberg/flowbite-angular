import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils';
import type { SidebarDisplayMode } from './sidebar.theme';

export interface SidebarMenuProperties {
  isOpen: keyof FlowbiteBoolean;
  displayMode: keyof SidebarDisplayMode;
  customStyle: DeepPartial<SidebarMenuTheme>;
}

export interface SidebarMenuTheme {
  root: {
    base: string;
    displayMode: SidebarDisplayMode;
    isOpen: FlowbiteBoolean;
  };
}

export const sidebarMenuTheme: SidebarMenuTheme = createTheme({
  root: {
    base: 'shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800',
    displayMode: {
      push: 'flex',
      over: 'flex fixed min-h-full z-50',
      backdrop: 'flex fixed min-h-full z-50',
    },
    isOpen: {
      enabled: '',
      disabled: 'hidden',
    },
  },
});

export type SidebarMenuClass = FlowbiteClass;
