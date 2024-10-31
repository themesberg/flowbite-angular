import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `ModalBodyComponent`
 */
export interface ModalBodyProperties {
  customStyle: DeepPartial<ModalBodyTheme>;
}

/**
 * Theme definition for `ModalBodyComponent`
 */
export interface ModalBodyTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme value for `ModalBodyComponent`
 */
export const modalBodyTheme: ModalBodyTheme = createTheme({
  root: {
    base: 'block p-6 space-y-6',
  },
});

/**
 * Generated class definition for `ModalBodyComponent`
 */
export type ModalBodyClass = FlowbiteClass;
