import { FlowbiteClass } from '../../common';

export type SidebarItemGroupProperties = {
  customStyle: Partial<SidebarItemGroupBaseTheme>;
};

export type SidebarItemGroupBaseTheme = {
  root: Partial<SidebarItemGroupRootTheme>;
};

export type SidebarItemGroupRootTheme = {
  base: string;
};

export const sidebarItemGroupTheme: SidebarItemGroupBaseTheme = {
  root: {
    base: 'flex flex-col space-y-2',
  },
};

export type SidebarItemGroupClass = FlowbiteClass & {
  root: string;
};

export const SidebarItemGroupClassInstance: SidebarItemGroupClass = {
  root: '',
  rootClass: '',
};
