import { FlowbiteClass } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface NavbarBrandProperties {
  customStyle: Partial<NavbarBrandBaseTheme>;
}

export interface NavbarBrandBaseTheme {
  root: Partial<NavbarBrandRootTheme>;
}

export interface NavbarBrandRootTheme {
  base: string;
}

export const navbarBrandTheme: NavbarBrandBaseTheme = {
  root: {
    base: 'flex items-center space-x-3 rtl:space-x-reverse',
  },
};

export interface NavbarBrandClass extends FlowbiteClass {
  navbarBrandClass: string;
}

export function NavbarBrandClassInstance(): NavbarBrandClass {
  return { navbarBrandClass: '', rootClass: '' };
}

export function getClasses(
  properties: NavbarBrandProperties,
): NavbarBrandClass {
  const theme: NavbarBrandBaseTheme = mergeTheme(
    navbarBrandTheme,
    properties.customStyle,
  );

  const output: NavbarBrandClass = {
    rootClass: '',
    navbarBrandClass: twMerge(theme.root.base),
  };

  return output;
}
