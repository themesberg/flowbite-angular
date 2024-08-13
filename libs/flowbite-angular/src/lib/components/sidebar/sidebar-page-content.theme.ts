import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils';
import type { SidebarDisplayMode } from './sidebar.theme';

export interface SidebarPageContentProperties {
  isOpen: keyof FlowbiteBoolean;
  displayMode: keyof SidebarDisplayMode;
  customStyle: DeepPartial<SidebarPageContentTheme>;
}

export interface SidebarPageContentTheme {
  root: {
    base: string;
    displayMode: SidebarDisplayMode;
  };
}

export const sidebarPageContentTheme: SidebarPageContentTheme = createTheme({
  root: {
    base: 'flex w-full',
    displayMode: {
      push: '',
      over: '',
      backdrop: 'fixed left-0 right-0 z-30 bg-gray-500 bg-opacity-50 blur-md',
    },
  },
});

export type SidebarPageContentClass = FlowbiteClass;
