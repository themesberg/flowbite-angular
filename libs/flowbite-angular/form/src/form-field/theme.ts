import type { FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteFormFieldColors extends FlowbiteColors {
  [key: string]: string;
}

export interface FlowbiteFormFieldSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'xl'> {
  [ket: string]: string;
}

export interface FlowbiteFormFieldModes {
  normal: string;
  floating: string;
  [key: string]: string;
}

export interface FlowbiteFormFieldTheme {
  host: FlowbiteFormFieldHostTheme;
}

export interface FlowbiteFormFieldHostTheme {
  base: string;
  mode: FlowbiteFormFieldModes;
}

export const flowbiteFormFieldTheme: FlowbiteFormFieldTheme = createTheme({
  host: {
    base: 'mb-5',
    mode: {
      normal: 'block',
      floating: 'group relative z-0',
    },
  },
});
