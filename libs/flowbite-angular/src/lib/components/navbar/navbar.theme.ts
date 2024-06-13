import {
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbiteColors,
} from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

//#region Component theme option
export interface NavbarColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}
//#endregion

export interface NavbarProperties {
  rounded: keyof FlowbiteBoolean;
  border: keyof FlowbiteBoolean;
  fixed: keyof FlowbiteBoolean;
  customStyle: Partial<NavbarBaseTheme>;
}

export interface NavbarBaseTheme {
  root: Partial<NavbarRootTheme>;
  content: Partial<NavbarContentTheme>;
}

export interface NavbarRootTheme {
  base: string;
  color: Record<keyof NavbarColors, string>;
  rounded: Record<keyof FlowbiteBoolean, string>;
  border: Record<keyof FlowbiteBoolean, string>;
  fixed: Record<keyof FlowbiteBoolean, string>;
}

export interface NavbarContentTheme {
  base: string;
}

export const navbarTheme: NavbarBaseTheme = {
  root: {
    base: 'bg-white border-gray-200 dark:bg-gray-900',
    color: {
      gray: 'bg-white border-gray-200 dark:border-gray-700 dark:bg-gray-800',
    },
    rounded: {
      enabled: 'rounded',
      disabled: '',
    },
    border: {
      enabled: 'border',
      disabled: '',
    },
    fixed: {
      enabled: 'sticky w-full z-20 top-0 start-0 border-b',
      disabled: '',
    },
  },
  content: {
    base: 'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4',
  },
};

export interface NavbarClass extends FlowbiteClass {
  contentClass: string;
}

export const NavbarClassInstance: NavbarClass = {
  contentClass: '',
  rootClass: '',
};
export function getClasses(properties: NavbarProperties): NavbarClass {
  const theme: NavbarBaseTheme = mergeTheme(
    navbarTheme,
    properties.customStyle,
  );

  const output: NavbarClass = {
    rootClass: twMerge(
      theme.root.base,
      theme.root.color?.['gray'],
      theme.root.rounded?.[properties.rounded],
      theme.root.border?.[properties.border],
      theme.root.fixed?.[properties.fixed],
    ),
    contentClass: twMerge(theme.content.base),
  };

  return output;
}
