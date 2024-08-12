import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface SidebarItemGroupProperties {
  customStyle: DeepPartial<SidebarItemGroupTheme>;
}

export interface SidebarItemGroupTheme {
  root: {
    base: string;
  };
}

export const sidebarItemGroupTheme: SidebarItemGroupTheme = createTheme({
  root: {
    base: 'flex flex-col py-2 font-semibold cursor-pointer',
  },
});

export type SidebarItemGroupClass = FlowbiteClass;
