import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

export interface ModalFooterProperties {
  customStyle: DeepPartial<ModalFooterTheme>;
}

export interface ModalFooterTheme {
  root: {
    base: string;
  };
}

export const modalFooterTheme: ModalFooterTheme = createTheme({
  root: {
    base: 'flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600',
  },
});

export type ModalFooterClass = FlowbiteClass;