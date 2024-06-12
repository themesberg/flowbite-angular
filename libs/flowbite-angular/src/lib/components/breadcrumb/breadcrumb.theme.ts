import { FlowbiteClass } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface BreadcrumbProperties {
  customStyle: Partial<BreadcrumbBaseTheme>;
}

export interface BreadcrumbBaseTheme {
  root: Partial<BreadcrumbRootTheme>;
}

export interface BreadcrumbRootTheme {
  base: string;
}

export const breadcrumbTheme: BreadcrumbBaseTheme = {
  root: {
    base: 'flex items-center',
  },
};

export type BreadcrumbClass = FlowbiteClass;

export const BreadcrumbClassInstance: BreadcrumbClass = {
  rootClass: '',
};

export function getClasses(properties: BreadcrumbProperties): BreadcrumbClass {
  const theme: BreadcrumbBaseTheme = mergeTheme(
    breadcrumbTheme,
    properties.customStyle,
  );

  const output: BreadcrumbClass = {
    rootClass: twMerge(theme.root.base),
  };

  return output;
}
