import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

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

export interface SidebarClass {
  sidebarClass: string;
  sidebarContentClass: string;
}

export function getClasses(properties: SidebarProperties): SidebarClass {
  const theme: SidebarBaseTheme = mergeTheme(
    sidebarTheme,
    properties.customStyle,
  );

  const output: SidebarClass = {
    sidebarClass: twMerge(theme.root.base),
    sidebarContentClass: twMerge(
      theme.content.base,
      theme.content.rounded![properties.rounded],
    ),
  };

  return output;
}
