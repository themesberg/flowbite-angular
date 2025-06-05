export interface ColorToTheme {
  light: string;
  dark: string;
}

export interface FlowbiteStateColors {
  default: ColorToTheme;
  info: ColorToTheme;
  failure: ColorToTheme;
  success: ColorToTheme;
  warning: ColorToTheme;
}

export interface FlowbiteColors extends FlowbiteStateColors {
  [key: string]: ColorToTheme;
  primary: ColorToTheme;
  dark: ColorToTheme;
  light: ColorToTheme;
  blue: ColorToTheme;
  cyan: ColorToTheme;
  gray: ColorToTheme;
  green: ColorToTheme;
  indigo: ColorToTheme;
  lime: ColorToTheme;
  pink: ColorToTheme;
  purple: ColorToTheme;
  red: ColorToTheme;
  teal: ColorToTheme;
  yellow: ColorToTheme;
}

export interface FlowbiteGradientColors extends Omit<FlowbiteStateColors, 'warning'> {
  [key: string]: ColorToTheme;
  cyan: ColorToTheme;
  lime: ColorToTheme;
  pink: ColorToTheme;
  purple: ColorToTheme;
  teal: ColorToTheme;
}

export interface FlowbiteGradientDuoToneColors {
  cyanToBlue: ColorToTheme;
  greenToBlue: ColorToTheme;
  pinkToOrange: ColorToTheme;
  purpleToBlue: ColorToTheme;
  purpleToPink: ColorToTheme;
  redToYellow: ColorToTheme;
  tealToLime: ColorToTheme;
}
