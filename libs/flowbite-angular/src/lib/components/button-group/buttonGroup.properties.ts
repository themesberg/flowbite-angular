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

export const buttonMonochromeColorClasses: Record<
  ButtonMonochromeColors,
  string
> = {
  cyan: ' text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
  failure:
    ' text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
  info: ' text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ',
  lime: ' text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800',
  pink: ' text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800',
  purple:
    ' text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800',
  success:
    ' text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800',
  teal: ' text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800',
};

export const buttonDuoToneColorClasses: Record<
  ButtonDuoToneColors,
  FillClasses
> = {
  purpleToBlue: {
    solid:
      ' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
    outline:
      ' text-gray-900 bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
  },
  cyanToBlue: {
    solid:
      ' text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800',
    outline:
      ' text-gray-900 bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800',
  },
  greenToBlue: {
    solid:
      ' text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
    outline:
      ' text-gray-900 bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
  },
  purpleToPink: {
    solid:
      ' text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
    outline:
      ' text-gray-900 bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
  },
  pinkToOrange: {
    solid:
      ' text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',
    outline:
      ' text-gray-900 bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',
  },
  tealToLime: {
    solid:
      ' text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700',
    outline:
      ' text-gray-900 bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800',
  },
  redToYellow: {
    solid:
      ' text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
    outline:
      ' text-gray-900 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
  },
};

export const buttonSizeClasses: Record<ButtonSizes, string> = {
  xs: ' text-xs py-2 px-3',
  sm: ' text-sm py-2 px-3',
  md: ' text-sm px-5 py-2.5',
  lg: ' text-base py-3 px-5',
  xl: ' text-base px-6 py-3.5',
};

export const buttonPillClasses: Record<string, string> = {
  false: ' rounded-lg',
  true: ' rounded-full',
};

export const buttonDisableClasses: Record<string, string> = {
  false: '',
  true: ' cursor-not-allowed opacity-50',
};
