import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

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
