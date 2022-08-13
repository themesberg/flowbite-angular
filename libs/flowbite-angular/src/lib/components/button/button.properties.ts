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

export const buttonColorClasses: Record<ButtonColors, string> = {
  dark: ' text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800',
  failure:
    ' text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600',
  gray: ' text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800',
  info: ' text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600',
  light:
    ' text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700',
  purple:
    ' text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600',
  success:
    ' text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600',
  warning:
    ' text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400',
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
