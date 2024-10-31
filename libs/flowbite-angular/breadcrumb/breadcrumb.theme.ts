import type { DeepPartial, FlowbiteClass, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region Component theme option
/**
 * Available colors for `BreadcrumbComponent`
 */
export interface BreadcrumbColors
  extends Pick<FlowbiteColors, 'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow'> {
  [key: string]: string;
}
//#endregion

/**
 * Required properties for the class generation of `BreadcrumbComponent`
 */
export interface BreadcrumbProperties {
  customStyle: DeepPartial<BreadcrumbTheme>;
}

/**
 * Theme definition for `BreadcrumbComponent`
 */
export interface BreadcrumbTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme for `BreadcrumbComponent`
 */
export const breadcrumbTheme: BreadcrumbTheme = createTheme({
  root: {
    base: 'flex items-center',
  },
});

/**
 * Generated class definition for `BreadcrumbComponent`
 */
export type BreadcrumbClass = FlowbiteClass;
