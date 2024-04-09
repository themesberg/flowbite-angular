import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface ModalHeaderProperties {
  customStyle: Partial<ModalHeaderBaseTheme>;
}

export interface ModalHeaderBaseTheme {
  root: Partial<ModalHeaderRootTheme>;
  title: Partial<ModalHeaderTitleRootTheme>;
  button: Partial<ModalHeaderButtonRootTheme>;
}

export interface ModalHeaderRootTheme {
  base: string;
}

export interface ModalHeaderTitleRootTheme {
  base: string;
}

export interface ModalHeaderButtonRootTheme {
  base: string;
}

export const modalHeaderTheme: ModalHeaderBaseTheme = {
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

export interface ModalHeaderClass {
  modalHeaderClass: string;
  modalHeaderTitleClass: string;
  modalHeaderButtonClass: string;
}

export function getClasses(
  properties: ModalHeaderProperties,
): ModalHeaderClass {
  const theme: ModalHeaderBaseTheme = mergeTheme(
    modalHeaderTheme,
    properties.customStyle,
  );

  const output: ModalHeaderClass = {
    modalHeaderClass: twMerge(theme.root.base),
    modalHeaderTitleClass: twMerge(theme.title.base),
    modalHeaderButtonClass: twMerge(theme.button.base),
  };

  return output;
}
