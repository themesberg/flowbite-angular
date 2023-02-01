export interface MappedButtonGroup {
  color: ButtonGroupColors;
  outline: boolean;
  size: ButtonSizes;
}

export type flowbiteColors = 'coolGray' | 'red' | 'amber' | 'emerald' | 'blue' | 'indigo' | 'purple' | 'pink';

export const colorsMap: Record<ButtonGroupColors, flowbiteColors> = {
  dark: 'coolGray',
  failure: 'red',
  gray: 'coolGray',
  info: 'blue',
  light: 'coolGray',
  purple: 'purple',
  success: 'emerald',
  warning: 'amber'
}

export type ButtonGroupColors =
  | 'dark'
  | 'failure'
  | 'gray'
  | 'info'
  | 'light'
  | 'purple'
  | 'success'
  | 'warning';

export type ButtonMonochromeColors =
  | 'info'
  | 'success'
  | 'cyan'
  | 'teal'
  | 'lime'
  | 'failure'
  | 'pink'
  | 'purple';

export type ButtonDuoToneColors =
  | 'purpleToBlue'
  | 'cyanToBlue'
  | 'greenToBlue'
  | 'purpleToPink'
  | 'pinkToOrange'
  | 'tealToLime'
  | 'redToYellow';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type FillClasses = {
  solid: string;
  outline: string;
};

export const buttonBaseClass = {
  default:
    'px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:text-white'
};



export const buttonGroupColorClasses: Record<ButtonGroupColors, FillClasses> = {
  dark: {
    solid:
      '',
    outline:
      ' ',
  },
  failure: {
    solid: `hover:text-red-700 focus:text-red-700 hover:text-red-700 focus:ring-red-700 dark:focus:ring-red-500 focus:text-red-700 | ` + buttonBaseClass.default,
    outline: '',
  },
  gray: {
    solid: `hover:text-gray-700 focus:text-gray-700 hover:text-gray-700 focus:ring-gray-700 dark:focus:ring-gray-500 focus:text-gray-700 |  ` + buttonBaseClass.default,
    outline: '',
  },
  info: {
    solid: `hover:text-blue-700 focus:text-blue-700 hover:text-blue-700 focus:ring-blue-700 dark:focus:ring-blue-500 focus:text-blue-700 |  ` + buttonBaseClass.default,
    outline: '',
  },
  light: {
    solid: `hover:text-blue-700 focus:text-blue-700 hover:text-blue-700 focus:ring-blue-700 dark:focus:ring-blue-500 focus:text-blue-700 |  ` + buttonBaseClass.default,
    outline: '',
  },
  purple: {
    solid: `hover:text-purple-700 focus:text-purple-700 hover:text-purple-700 focus:ring-purple-700 dark:focus:ring-purple-500 focus:text-purple-700 | ` + buttonBaseClass.default,
    outline: '',
  },
  success: {
    solid: `hover:text-green-700 focus:text-green-700 hover:text-green-600 focus:ring-green-700 dark:focus:ring-green-500 focus:text-green-700 |  ` + buttonBaseClass.default,
    outline: ''
  },
  warning: {
    solid: `hover:text-amber-700 focus:text-amber-700 hover:text-amber-700 focus:ring-amber-700 dark:focus:ring-amber-500 focus:text-amber-700 | ` + buttonBaseClass.default,
    outline: '',
  },
};
