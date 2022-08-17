export type ButtonColors =
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
    'group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10',
  span: 'group inline-flex relative items-center justify-center p-0.5 font-medium overflow-hidden',
};

export const spanBaseClass =
  'relative inline-flex items-center bg-white transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900';

export const buttonColorClasses: Record<ButtonColors, FillClasses> = {
  dark: {
    solid:
      ' text-white bg-gray-800 dark:bg-gray-800 border border-transparent dark:border-gray-700 hover:bg-gray-900 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 disabled:hover:bg-gray-800 dark:disabled:hover:bg-gray-800',
    outline:
      ' text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:hover:bg-gray-600 dark:focus:ring-gray-800',
  },
  failure: {
    solid:
      ' text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
    outline:
      ' text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
  },
  gray: {
    solid:
      ' text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2',
    outline:
      ' text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2',
  },
  info: {
    solid:
      ' text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
    outline:
      ' text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800',
  },
  light: {
    solid:
      ' text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700',
    outline:
      ' text-gray-900 bg-transparent border border-gray-200 hover:bg-white focus:ring-4 focus:ring-blue-300 dark:bg-transparent dark:text-white dark:border-white dark:hover:text-gray-900 dark:hover:bg-white dark:hover:border-gray-700 dark:focus:ring-gray-700',
  },
  purple: {
    solid:
      ' text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
    outline:
      ' text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900',
  },
  success: {
    solid:
      ' text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
    outline:
      ' text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
  },
  warning: {
    solid:
      ' text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900',
    outline:
      ' text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
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
