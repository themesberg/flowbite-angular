import { FlowbiteClass } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';
import { twMerge } from 'tailwind-merge';

export interface SidebarItemGroupProperties {
  customStyle: Partial<SidebarItemGroupBaseTheme>;
}

export interface SidebarItemGroupBaseTheme {
  root: Partial<SidebarItemGroupRootTheme>;
}

export interface SidebarItemGroupRootTheme {
  base: string;
}

export const sidebarItemGroupTheme: SidebarItemGroupBaseTheme = {
  root: {
    base: 'flex flex-col space-y-2',
  },
};

export interface SidebarItemGroupClass extends FlowbiteClass {
  root: string;
}

export const SidebarItemGroupClassInstance: SidebarItemGroupClass = {
  root: '',
  rootClass: '',
};

export function getClasses(
  properties: SidebarItemGroupProperties,
): SidebarItemGroupClass {
  const theme: SidebarItemGroupBaseTheme = mergeTheme(
    sidebarItemGroupTheme,
    properties.customStyle,
  );

  const output: SidebarItemGroupClass = {
    rootClass: '',
    root: twMerge(theme.root.base),
  };

  return output;
}
