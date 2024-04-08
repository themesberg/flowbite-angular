import { FlowbiteBoolean, FlowbiteColors } from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface NavbarProperties {
  rounded: keyof FlowbiteBoolean;
  border: keyof FlowbiteBoolean;
  fluid: keyof FlowbiteBoolean;
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
}

export interface NavbarContentTheme {
  base: string;
  fluid: Record<keyof FlowbiteBoolean, string>;
}

export interface NavbarColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

export const navbarTheme: NavbarBaseTheme = {
  root: {
    base: 'sm:px-4',
    color: {
      gray: 'border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800',
    },
    rounded: {
      enabled: 'rounded',
      disabled: '',
    },
    border: {
      enabled: 'border',
      disabled: '',
    },
  },
  content: {
    base: 'mx-auto flex flex-wrap items-center justify-between',
    fluid: {
      enabled: '',
      disabled: 'container',
    },
  },
};

export interface NavbarClass {
  navbarClass: string;
  contentClass: string;
}

export function getClasses(properties: NavbarProperties): NavbarClass {
  const theme: NavbarBaseTheme = mergeTheme(
    navbarTheme,
    properties.customStyle,
  );

  const output: NavbarClass = {
    navbarClass: twMerge(
      theme.root.base,
      theme.root.color!['gray'],
      theme.root.rounded![properties.rounded],
      theme.root.border![properties.border],
    ),
    contentClass: twMerge(
      theme.content.base,
      theme.content.fluid![properties.fluid],
    ),
  };

  return output;
}
