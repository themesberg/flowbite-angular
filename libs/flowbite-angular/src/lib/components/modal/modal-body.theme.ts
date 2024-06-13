import { FlowbiteClass } from '../../common';

export interface ModalBodyProperties {
  customStyle: Partial<ModalBodyBaseTheme>;
}

export interface ModalBodyBaseTheme {
  root: Partial<ModalBodyRootTheme>;
}

export interface ModalBodyRootTheme {
  base: string;
}

export const modalBodyTheme: ModalBodyBaseTheme = {
  root: {
    base: 'p-6 space-y-6',
  },
};

export type ModalBodyClass = FlowbiteClass;

export const ModalBodyClassInstance: ModalBodyClass = {
  rootClass: '',
};
