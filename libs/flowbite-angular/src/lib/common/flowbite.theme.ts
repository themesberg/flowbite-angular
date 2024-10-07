/**
 * Base definition of heading level used in flowbite-angular.
 */
export type FlowbiteHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/**
 * Base definition of theme used in flowbite-angular.
 */
export type FlowbiteTheme = 'dark' | 'light';

/**
 * Base definition of boolean used in flowbite-angular.
 */
export interface FlowbiteBoolean {
  enabled: string;
  disabled: string;
}

/**
 * Base definition of colors used in flowbite-angular.
 */
export interface FlowbiteColors {
  primary: string;
  light: string;
  dark: string;
  blue: string;
  cyan: string;
  gray: string;
  green: string;
  indigo: string;
  lime: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

/**
 * Base definition of gradient colors used in flowbite-angular.
 */
export interface FlowbiteGradientColors extends Omit<FlowbiteColors, 'warning'> {
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
}

/**
 * Base definition of gradient color with fade from one color to another used in flowbite-angular.
 */
export interface FlowbiteGradientDuoToneColors {
  cyanToBlue: string;
  greenToBlue: string;
  pinkToOrange: string;
  purpleToBlue: string;
  purpleToPink: string;
  redToYellow: string;
  tealToLime: string;
}

/**
 * Base definition of positions used in flowbite-angular.
 */
export interface FlowbitePositions {
  'bottom-left': string;
  'bottom-right': string;
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
}

/**
 * Base definition of sizes used in flowbite-angular.
 */
export interface FlowbiteSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

/**
 * Base definition of content positions used in flowbite-angular.
 */
export interface FlowbiteContentPositions {
  center: string;
}

/**
 * Base definition of classes used in flowbite-angular.
 */
export interface FlowbiteClass {
  rootClass: string;
}
