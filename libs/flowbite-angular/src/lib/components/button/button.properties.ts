export type ButtonColors =
  | 'dark'
  | 'failure'
  | 'gray'
  | 'info'
  | 'light'
  | 'purple'
  | 'success'
  | 'warning';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type FillClasses = {
  solid: string;
  outline: string;
};

export const buttonBaseClass =
  'group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10';

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

export const buttonSizeClasses: Record<ButtonSizes, string> = {
  xs: ' text-xs px-2 py-1',
  sm: ' text-sm px-3 py-1.5',
  md: ' text-sm px-4 py-2',
  lg: ' text-base px-5 py-2.5',
  xl: ' text-base px-6 py-3',
};

export const buttonPillClasses: Record<string, string> = {
  false: ' rounded-lg',
  true: ' rounded-full',
};

export const buttonDisableClasses: Record<string, string> = {
  false: '',
  true: ' cursor-not-allowed opacity-50',
};
