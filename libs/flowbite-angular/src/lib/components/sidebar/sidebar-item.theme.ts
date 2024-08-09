import type { FlowbiteClass } from '../../common';
import type { DeepPartial, RouterLinkParameter } from '../../common/flowbite.type';
import { createTheme } from '../../utils/theme/create-theme';

export interface SidebarItemProperties {
  icon: string | undefined;
  link?: RouterLinkParameter;
  label: string | undefined;
  customStyle: DeepPartial<SidebarItemBaseTheme>;
}

export interface SidebarItemBaseTheme {
  base: string;
  icon: DeepPartial<SidebarItemIconRootTheme>;
}

export interface SidebarItemIconRootTheme {
  base: string;
}

export const sidebarItemTheme: SidebarItemBaseTheme = createTheme({
  base: 'group flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700',
  icon: {
    base: 'flex-1 whitespace-nowrap',
  },
});

export interface SidebarItemClass extends FlowbiteClass {
  sidebarIconClass: string;
}

export const SidebarItemClassInstance: SidebarItemClass = {
  rootClass: '',
  sidebarIconClass: '',
};
