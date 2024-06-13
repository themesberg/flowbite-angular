import { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';

export interface SidebarProperties {
  rounded: keyof FlowbiteBoolean;
  customStyle: Partial<SidebarBaseTheme>;
}

export interface SidebarBaseTheme {
  root: Partial<SidebarRootTheme>;
  content: Partial<SidebarContentRootTheme>;
}

export interface SidebarRootTheme {
  base: string;
}

export interface SidebarContentRootTheme {
  base: string;
  rounded: Record<keyof FlowbiteBoolean, string>;
}

export const sidebarTheme: SidebarBaseTheme = {
  root: {
    base: 'h-full',
  },
  content: {
    base: 'flex h-full flex-col space-y-4 divide-y divide-gray-200 overflow-y-auto bg-white py-4 px-3 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800',
    rounded: {
      enabled: 'rounded',
      disabled: '',
    },
  },
};

export interface SidebarClass extends FlowbiteClass {
  sidebarClass: string;
  sidebarContentClass: string;
}

export const SidebarClassInstance: SidebarClass = {
  rootClass: '',
  sidebarClass: '',
  sidebarContentClass: '',
};
