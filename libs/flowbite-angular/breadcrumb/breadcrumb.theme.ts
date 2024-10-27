import type { DeepPartial, FlowbiteClass, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

export interface BreadcrumbColors
  extends Pick<FlowbiteColors, 'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow'> {
  [key: string]: string;
}

export interface BreadcrumbProperties {
  customStyle: DeepPartial<BreadcrumbTheme>;
}

export interface BreadcrumbTheme {
  root: {
    base: string;
  };
}

export const breadcrumbTheme: BreadcrumbTheme = createTheme({
  root: {
    base: 'flex items-center',
  },
});

export type BreadcrumbClass = FlowbiteClass;
