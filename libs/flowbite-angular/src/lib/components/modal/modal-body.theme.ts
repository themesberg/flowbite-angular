import { FlowbiteClass } from '../../common';

export type ModalBodyProperties = {
  customStyle: Partial<ModalBodyBaseTheme>;
};

export type ModalBodyBaseTheme = {
  root: Partial<ModalBodyRootTheme>;
};

export type ModalBodyRootTheme = {
  base: string;
};

export const modalBodyTheme: ModalBodyBaseTheme = {
  root: {
    base: 'p-6 space-y-6',
  },
};

export type ModalBodyClass = FlowbiteClass;

export const ModalBodyClassInstance: ModalBodyClass = {
  rootClass: '',
};
