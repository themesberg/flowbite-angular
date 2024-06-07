import { FlowbiteClass } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

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

export function ModalBodyClassInstance(): ModalBodyClass {
  return { rootClass: '' };
}

export function getClasses(properties: ModalBodyProperties): ModalBodyClass {
  const theme = mergeTheme(modalBodyTheme, properties.customStyle);

  const output: ModalBodyClass = {
    rootClass: twMerge(theme.root.base),
  };

  return output;
}
