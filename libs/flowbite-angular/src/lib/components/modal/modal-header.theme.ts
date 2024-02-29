import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface DropdownHeaderProperties {
  customStyle: Partial<DropdownHeaderBaseTheme>;
}

export interface DropdownHeaderBaseTheme {
  root: Partial<DropdownHeaderRootTheme>;
  title: Partial<DropdownHeaderTitleRootTheme>;
  button: Partial<DropdownHeaderButtonRootTheme>;
}

export interface DropdownHeaderRootTheme {
  base: string;
}

export interface DropdownHeaderTitleRootTheme {
  base: string;
}

export interface DropdownHeaderButtonRootTheme {
  base: string;
}

export const dropdownHeaderTheme: DropdownHeaderBaseTheme = {
  root: {
    base: 'flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600',
  },
  title: {
    base: 'text-xl font-medium text-gray-900 dark:text-white',
  },
  button: {
    base: 'text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white',
  },
};

export function getClasses(properties: DropdownHeaderProperties): {
  modalHeaderClass: string;
  modalHeaderTitleClass: string;
  modalHeaderButtonClass: string;
} {
  const theme: DropdownHeaderBaseTheme = mergeTheme(
    dropdownHeaderTheme,
    properties.customStyle,
  );

  const output = {
    modalHeaderClass: twMerge(theme.root.base),
    modalHeaderTitleClass: twMerge(theme.title.base),
    modalHeaderButtonClass: twMerge(theme.button.base),
  };

  return output;
}
