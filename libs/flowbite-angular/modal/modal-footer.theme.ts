import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `ModalFooterComponent`
 */
export interface ModalFooterProperties {
  customStyle: DeepPartial<ModalFooterTheme>;
}

/**
 * Theme definition for `ModalFooteromponent`
 */
export interface ModalFooterTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme for `ModalFooterComponent`
 */
export const modalFooterTheme: ModalFooterTheme = createTheme({
  root: {
    base: 'flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600',
  },
});

/**
 * Generated class definition for `ModalFooterComponent`
 */
export type ModalFooterClass = FlowbiteClass;
