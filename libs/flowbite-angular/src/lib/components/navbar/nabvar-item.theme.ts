import { FlowbiteColors } from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface NabvarItemProperties {
  color: keyof NavbarItemColors;
  customStyle: Partial<NavbarItemBaseTheme>;
}

export interface NavbarItemBaseTheme {
  root: Partial<NavbarItemRootTheme>;
}

export interface NavbarItemRootTheme {
  base: string;
  color: Record<keyof NavbarItemColors, string>;
}

export interface NavbarItemColors extends Pick<FlowbiteColors, 'blue'> {
  [key: string]: string;
}

export const navbarItemTheme: NavbarItemBaseTheme = {
  root: {
    base: 'block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
    color: {
      blue: 'md:hover:text-blue-700 md:dark:hover:text-blue-500',
    },
  },
};

export interface NavbarItemClass {
  navbarItemClass: string;
}

export function getClasses(properties: NabvarItemProperties): NavbarItemClass {
  const theme: NavbarItemBaseTheme = mergeTheme(
    navbarItemTheme,
    properties.customStyle,
  );

  const output: NavbarItemClass = {
    navbarItemClass: twMerge(
      theme.root.base,
      theme.root.color![properties.color],
    ),
  };

  return output;
}
