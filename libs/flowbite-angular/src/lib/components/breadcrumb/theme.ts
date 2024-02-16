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

export function getClasses(properties: BreadcrumbProperties): string {
  const theme: BreadcrumbBaseTheme = mergeTheme(
    breadcrumbTheme,
    properties.customStyle,
  );

  const output = twMerge(theme.root.base);

  return output;
}
