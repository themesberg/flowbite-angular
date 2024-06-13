import { FlowbiteClass } from '../../common';
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

export type ModalFooterClass = FlowbiteClass;

export const ModalFooterClassInstance: ModalFooterClass = {
  rootClass: '',
};
