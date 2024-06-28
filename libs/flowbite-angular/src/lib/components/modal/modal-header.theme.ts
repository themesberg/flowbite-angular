import { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface ModalHeaderProperties {
  customStyle: DeepPartial<ModalHeaderBaseTheme>;
}

export interface ModalHeaderBaseTheme {
  base: string;
  title: DeepPartial<ModalHeaderTitleRootTheme>;
  button: DeepPartial<ModalHeaderButtonRootTheme>;
}

export interface ModalHeaderTitleRootTheme {
  base: string;
}

export interface ModalHeaderButtonRootTheme {
  base: string;
}

export const modalHeaderTheme: ModalHeaderBaseTheme = createTheme({
  base: 'flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600',
  title: {
    base: 'text-xl font-medium text-gray-900 dark:text-white',
  },
  button: {
    base: 'text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white',
  },
});

export interface ModalHeaderClass extends FlowbiteClass {
  modalHeaderTitleClass: string;
  modalHeaderButtonClass: string;
}

export const ModalHeaderClassInstance: ModalHeaderClass = {
  modalHeaderButtonClass: '',
  modalHeaderTitleClass: '',
  rootClass: '',
};
