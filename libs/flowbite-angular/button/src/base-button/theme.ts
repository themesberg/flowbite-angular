import type { ColorToTheme, FlowbiteColors, FlowbiteSizes } from 'flowbite-angular';

export interface FlowbiteBaseButtonSizes
  extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteBaseButtonColors
  extends Pick<FlowbiteColors, 'default' | 'primary' | 'dark' | 'gray' | 'green' | 'red'> {
  [key: string]: ColorToTheme;
}
