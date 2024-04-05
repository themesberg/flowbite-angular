import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface ModalFooterProperties {
  customStyle: Partial<ModalFooterBaseTheme>;
}

export interface ModalFooterBaseTheme {
  root: Partial<ModalFooterRootTheme>;
}

export interface ModalFooterRootTheme {
  base: string;
}

export const modalFooterTheme: ModalFooterBaseTheme = {
  root: {
    base: 'flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600',
  },
};

export interface ModalFooterClass {
  root: string;
}

export function getClasses(
  properties: ModalFooterProperties,
): ModalFooterClass {
  const theme: ModalFooterBaseTheme = mergeTheme(
    modalFooterTheme,
    properties.customStyle,
  );

  const output: ModalFooterClass = {
    root: twMerge(theme.root.base),
  };

  return output;
}
