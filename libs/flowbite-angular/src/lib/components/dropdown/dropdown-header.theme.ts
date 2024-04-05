import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface DropdownHeaderProperties {
  customStyle: Partial<DropdownHeaderBaseTheme>;
}

export interface DropdownHeaderBaseTheme {
  root: Partial<DropdownHeaderRootTheme>;
}

export interface DropdownHeaderRootTheme {
  base: string;
}

export const dropdownHeaderTheme: DropdownHeaderBaseTheme = {
  root: {
    base: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
  },
};

export interface DropdownHeaderClass {
  root: string;
}

export function getClasses(
  properties: DropdownHeaderProperties,
): DropdownHeaderClass {
  const theme: DropdownHeaderBaseTheme = mergeTheme(
    dropdownHeaderTheme,
    properties.customStyle,
  );

  const output: DropdownHeaderClass = {
    root: twMerge(theme.root.base),
  };

  return output;
}
