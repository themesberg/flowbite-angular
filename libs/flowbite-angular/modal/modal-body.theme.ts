import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

export interface ModalBodyProperties {
  customStyle: DeepPartial<ModalBodyTheme>;
}

export interface ModalBodyTheme {
  root: {
    base: string;
  };
}

export const modalBodyTheme: ModalBodyTheme = createTheme({
  root: {
    base: 'block p-6 space-y-6',
  },
});

export type ModalBodyClass = FlowbiteClass;
