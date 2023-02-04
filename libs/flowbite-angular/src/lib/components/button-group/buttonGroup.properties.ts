export type ButtonGroupColors =
  | 'dark'
  | 'failure'
  | 'info'
  | 'light'
  | 'purple'
  | 'success'
  | 'warning';

type FillClasses = {
  solid: string;
  outline: string;
};

export const buttonGroupColorClasses: Record<ButtonGroupColors, FillClasses> = {
  dark: {
    solid: `hover:text-gray-700 focus:text-gray-700 hover:text-gray-700 focus:ring-gray-700 dark:focus:ring-gray-500 focus:text-gray-700`,
    outline: `text-gray-900 bg-transparent border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 `,
  },
  failure: {
    solid: `hover:text-red-700 focus:text-red-700 hover:text-red-700 focus:ring-red-700 dark:focus:ring-red-500 focus:text-red-700`,
    outline: `text-red-900 bg-transparent border-red-900 hover:bg-red-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-red-500 focus:bg-red-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-red-700 dark:focus:bg-red-700 `,
  },
  info: {
    solid: `hover:text-sky-700 focus:text-sky-700 hover:text-sky-700 focus:ring-sky-700 dark:focus:ring-sky-500 focus:text-sky-700`,
    outline: `text-sky-900 bg-transparent border-sky-900 hover:bg-sky-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-sky-500 focus:bg-sky-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-sky-700 dark:focus:bg-sky-700 `,
  },
  light: {
    solid: `hover:text-blue-700 focus:text-blue-700 hover:text-blue-700 focus:ring-blue-700 dark:focus:ring-blue-500 focus:text-blue-700`,
    outline: `text-blue-900 bg-transparent border-blue-900 hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:bg-blue-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700 `,
  },
  purple: {
    solid: `hover:text-purple-700 focus:text-purple-700 hover:text-purple-700 focus:ring-purple-700 dark:focus:ring-purple-500 focus:text-purple-700`,
    outline: `text-purple-900 bg-transparent border-purple-900 hover:bg-purple-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-purple-500 focus:bg-purple-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-purple-700 dark:focus:bg-purple-700 `,
  },
  success: {
    solid: `hover:text-green-700 focus:text-green-700 hover:text-green-600 focus:ring-green-700 dark:focus:ring-green-500 focus:text-green-700`,
    outline: `text-green-900 bg-transparent border-green-900 hover:bg-green-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-green-500 focus:bg-green-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-green-700 dark:focus:bg-green-700 `,
  },
  warning: {
    solid: `hover:text-amber-700 focus:text-amber-700 hover:text-amber-700 focus:ring-amber-700 dark:focus:ring-amber-500 focus:text-amber-700`,
    outline: `text-amber-900 bg-transparent border-amber-900 hover:bg-amber-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-500 focus:bg-amber-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-amber-700 dark:focus:bg-amber-700 `,
  },
};
