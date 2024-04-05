import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface DropdownItemProperties {
  customStyle: Partial<DropdownItemBaseTheme>;
}

export interface DropdownItemBaseTheme {
  root: Partial<DropdownItemRootTheme>;
}

export interface DropdownItemRootTheme {
  base: string;
}

export const dropdownItemTheme: DropdownItemBaseTheme = {
  root: {
    base: 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white',
  },
};

export interface DropdownItemClass {
  root: string;
}

export function getClasses(
  properties: DropdownItemProperties,
): DropdownItemClass {
  const theme: DropdownItemBaseTheme = mergeTheme(
    dropdownItemTheme,
    properties.customStyle,
  );

  const output: DropdownItemClass = {
    root: twMerge(theme.root.base),
  };

  return output;
}
