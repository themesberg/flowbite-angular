import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';
import type { FlowbiteIconColors, FlowbiteIconSizes } from 'flowbite-angular/icon';

export interface FlowbiteIconButtonTheme {
  host: FlowbiteIconButtonHostTheme;
}

export interface FlowbiteIconButtonHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbiteIconSizes;
  pill: FlowbiteBoolean;
  color: FlowbiteIconColors;
  colorOutline: FlowbiteIconColors;
}

export const flowbiteIconButtonTheme: FlowbiteIconButtonTheme = createTheme({
  host: {
    base: 'flex cursor-pointer items-center justify-center border border-transparent text-center font-medium',
    transition: 'transition-colors duration-150 ease-in-out',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-5 py-3 text-base',
    },
    pill: {
      on: 'rounded-full',
      off: 'rounded-lg',
    },
    color: {
      primary:
        'bg-primary-700 data-hover:bg-primary-800 dark:bg-primary-800 dark:data-hover:bg-primary-900 data-focus-visible:ring-primary-400 dark:data-focus-visible:ring-primary-600 text-gray-100',
      dark: 'bg-gray-600 text-gray-100 data-focus-visible:ring-gray-400 data-hover:bg-gray-700 dark:bg-gray-900 dark:data-focus-visible:ring-gray-600 dark:data-hover:bg-gray-800',
      light:
        'bg-gray-100 text-gray-900 data-focus-visible:ring-gray-400 data-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:data-focus-visible:ring-gray-600 dark:data-hover:bg-gray-600',
    },
    colorOutline: {
      primary:
        'border-primary-700 text-primary-700 data-hover:bg-primary-700 data-focus-visible:ring-primary-400 dark:data-focus-visible:ring-primary-600 data-hover:text-gray-100',
      dark: 'border-gray-600 text-gray-600 data-focus-visible:ring-gray-400 data-hover:bg-gray-600 data-hover:text-gray-100 dark:data-focus-visible:ring-gray-600',
      light:
        'border-gray-600 text-gray-600 data-focus-visible:ring-gray-400 data-hover:bg-gray-300 data-hover:text-gray-900 dark:data-focus-visible:ring-gray-600',
    },
  },
});
