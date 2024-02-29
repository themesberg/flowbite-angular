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

export function getClasses(properties: ModalBodyProperties): string {
  const theme = mergeTheme(modalBodyTheme, properties.customStyle);

  const output = twMerge(theme.root.base);

  return output;
}
