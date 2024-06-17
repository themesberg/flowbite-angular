import { FlowbiteClass } from '../../common';

export type ModalHeaderProperties = {
  customStyle: Partial<ModalHeaderBaseTheme>;
};

export type ModalHeaderBaseTheme = {
  root: Partial<ModalHeaderRootTheme>;
  title: Partial<ModalHeaderTitleRootTheme>;
  button: Partial<ModalHeaderButtonRootTheme>;
};

export type ModalHeaderRootTheme = {
  base: string;
};

export type ModalHeaderTitleRootTheme = {
  base: string;
};

export type ModalHeaderButtonRootTheme = {
  base: string;
};

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

export type ModalHeaderClass = FlowbiteClass & {
  modalHeaderTitleClass: string;
  modalHeaderButtonClass: string;
};

export const ModalHeaderClassInstance: ModalHeaderClass = {
  modalHeaderButtonClass: '',
  modalHeaderTitleClass: '',
  rootClass: '',
};
