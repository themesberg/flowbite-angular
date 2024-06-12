import { FlowbiteClass } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface SidebarItemProperties {
  icon: string | undefined;
  link: string | undefined;
  label: string | undefined;
  customStyle: Partial<SidebarItemBaseTheme>;
}

export interface SidebarItemBaseTheme {
  root: Partial<SidebarItemRootTheme>;
  icon: Partial<SidebarItemIconRootTheme>;
}

export interface SidebarItemRootTheme {
  base: string;
}

export interface SidebarItemIconRootTheme {
  base: string;
}

export const sidebarItemTheme: SidebarItemBaseTheme = {
  root: {
    base: 'group flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700',
  },
  icon: {
    base: 'flex-1 whitespace-nowrap',
  },
};

export interface SidebarItemClass extends FlowbiteClass {
  sidebarClass: string;
  sidebarIconClass: string;
}

export const SidebarItemClassInstance: SidebarItemClass = {
  rootClass: '',
  sidebarClass: '',
  sidebarIconClass: '',
};

export function getClasses(
  properties: SidebarItemProperties,
): SidebarItemClass {
  const theme: SidebarItemBaseTheme = mergeTheme(
    sidebarItemTheme,
    properties.customStyle,
  );

  const output: SidebarItemClass = {
    rootClass: '',
    sidebarClass: twMerge(theme.root.base),
    sidebarIconClass: twMerge(theme.icon.base),
  };

  return output;
}
