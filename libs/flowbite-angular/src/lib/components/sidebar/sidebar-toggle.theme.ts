import { FlowbiteBoolean, FlowbiteClass } from '../../common';

export type SidebarToggleProperties = {
  isCollapsed: keyof FlowbiteBoolean;
  customStyle: Partial<SidebarToggleBaseTheme>;
};

export type SidebarToggleBaseTheme = {
  root: Partial<SidebarToggleRootTheme>;
};

export type SidebarToggleRootTheme = {
  base: string;
  isCollapsed: Record<keyof FlowbiteBoolean, string>;
};

export const sidebarToggleTheme: SidebarToggleBaseTheme = {
  root: {
    base: 'cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
    isCollapsed: {
      enabled: 'w-16',
      disabled: 'w-64',
    },
  },
};

export type SidebarToggleClass = FlowbiteClass;

export const SidebarToggleClassInstance: SidebarToggleClass = {
  rootClass: '',
};
