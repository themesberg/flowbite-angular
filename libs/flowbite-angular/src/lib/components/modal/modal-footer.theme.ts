import { FlowbiteClass } from '../../common';

export type ModalFooterProperties = {
  customStyle: Partial<ModalFooterBaseTheme>;
};

export type ModalFooterBaseTheme = {
  root: Partial<ModalFooterRootTheme>;
};

export type ModalFooterRootTheme = {
  base: string;
};

export const modalFooterTheme: ModalFooterBaseTheme = {
  root: {
    base: 'flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600',
  },
};

export type ModalFooterClass = FlowbiteClass;

export const ModalFooterClassInstance: ModalFooterClass = {
  rootClass: '',
};
