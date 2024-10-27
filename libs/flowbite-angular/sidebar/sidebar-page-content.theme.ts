import type { SidebarDisplayMode } from './sidebar.theme';

import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

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
    base: 'flex flex-1',
    displayMode: {
      push: '',
      over: '',
      backdrop: 'sticky left-0 right-0 z-30 bg-gray-500 bg-opacity-50 blur-md',
    },
  },
});

export type SidebarPageContentClass = FlowbiteClass;
