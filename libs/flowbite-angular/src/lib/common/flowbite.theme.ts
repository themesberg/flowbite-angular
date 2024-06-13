export type FlowbiteHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type FlowbiteTheme = 'dark' | 'light';

export type FlowbiteBoolean = {
  enabled: string;
  disabled: string;
};

export type FlowbiteStateColors = {
  info: string;
  failure: string;
  success: string;
  warning: string;
};

export type FlowbiteColors = FlowbiteStateColors & {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
};

export type FlowbiteGradientColors = Omit<FlowbiteStateColors, 'warning'> & {
  [key: string]: string;
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
};

export type FlowbiteGradientDuoToneColors = {
  cyanToBlue: string;
  greenToBlue: string;
  pinkToOrange: string;
  purpleToBlue: string;
  purpleToPink: string;
  redToYellow: string;
  tealToLime: string;
};

export type FlowbitePositions = {
  'bottom-left': string;
  'bottom-right': string;
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
};

export type FlowbiteSizes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type FlowbiteContentPositions = {
  center: string;
};

export type FlowbiteClass = {
  rootClass: string;
};
