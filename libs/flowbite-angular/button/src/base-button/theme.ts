import type { FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';

export interface FlowbiteBaseButtonSizes
  extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteBaseButtonColors extends FlowbiteColors {
  [key: string]: string;
}
