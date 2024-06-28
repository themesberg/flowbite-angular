import { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface ModalBodyProperties {
  customStyle: DeepPartial<ModalBodyBaseTheme>;
}

export interface ModalBodyBaseTheme {
  base: string;
}

export const modalBodyTheme: ModalBodyBaseTheme = createTheme({
  base: 'p-6 space-y-6',
});

export type ModalBodyClass = FlowbiteClass;

export const ModalBodyClassInstance: ModalBodyClass = {
  rootClass: '',
};
