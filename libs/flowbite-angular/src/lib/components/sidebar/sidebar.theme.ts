import { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';

export type SidebarProperties = {
  isRounded: keyof FlowbiteBoolean;
  customStyle: Partial<SidebarBaseTheme>;
};

export type SidebarBaseTheme = {
  root: Partial<SidebarRootTheme>;
};

export type SidebarRootTheme = {
  base: string;
  isRounded: Record<keyof FlowbiteBoolean, string>;
};

export const sidebarTheme: SidebarBaseTheme = {
  root: {
    base: 'flex h-full flex-col space-y-4 divide-y divide-gray-200 overflow-y-auto bg-white py-4 px-3 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800',
    isRounded: {
      enabled: 'rounded',
      disabled: '',
    },
  },
};

export type SidebarClass = FlowbiteClass;

export const SidebarClassInstance: SidebarClass = {
  rootClass: '',
};
