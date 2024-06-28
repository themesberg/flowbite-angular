import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface ModalFooterProperties {
  customStyle: DeepPartial<ModalFooterBaseTheme>;
}

export interface ModalFooterBaseTheme {
  base: string;
}

export const modalFooterTheme: ModalFooterBaseTheme = createTheme({
  base: 'flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600',
});

export type ModalFooterClass = FlowbiteClass;

export const ModalFooterClassInstance: ModalFooterClass = {
  rootClass: '',
};
