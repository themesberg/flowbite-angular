import type {
  DeepPartial,
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbiteColors,
  FlowbiteSizes,
  RouterLinkParameter,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region Component theme option
/**
 * Available colors for `BadgeComponent`
 */
export interface BadgeColors
  extends Pick<
    FlowbiteColors,
    'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink'
  > {
  [key: string]: string;
}

/**
 * Available sizes for `BadgeComponent`
 */
export interface BadgeSizes extends Pick<FlowbiteSizes, 'xs' | 'sm'> {
  [key: string]: string;
}
//#endregion

/**
 * Required properties for the class generation of `BadgeComponent`
 */
export interface BadgeProperties {
  color: keyof BadgeColors;
  hasBorder: keyof FlowbiteBoolean;
  size: keyof BadgeSizes;
  isIconOnly: keyof FlowbiteBoolean;
  isPill: keyof FlowbiteBoolean;
  link: RouterLinkParameter;
  customStyle: DeepPartial<BadgeTheme>;
}

/**
 * Theme definition for `BadgeComponent`
 */
export interface BadgeTheme {
  root: {
    base: string;
    hasBorder: FlowbiteBoolean;
    color: BadgeColors;
    size: BadgeSizes;
    isPill: FlowbiteBoolean;
    isIconOnly: FlowbiteBoolean;
    link: FlowbiteBoolean;
  };
}

/**
 * Default theme for `BadgeComponent`
 */
export const badgeTheme: BadgeTheme = createTheme({
  root: {
    base: 'flex h-fit items-center gap-1 font-semibold',
    color: {
      primary:
        'bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-300 group-hover:bg-primary-200 dark:group-hover:bg-primary-600 border-primary-300 dark:border-primary-800',
      dark: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 border-gray-300 dark:border-gray-600',
      blue: 'bg-blue-100 dark:bg-blue-200 text-blue-800 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300 border-blue-300 dark:border-blue-800',
      red: 'bg-red-100 dark:bg-red-200 text-red-800 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300 border-red-300 dark:border-red-800',
      green:
        'bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300 border-green-300 dark:border-green-800',
      yellow:
        'bg-yellow-100 dark:bg-yellow-200 text-yellow-800 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300 border-yellow-300 dark:border-yellow-800',
      indigo:
        'bg-indigo-100 dark:bg-indigo-200 text-indigo-800 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300 border-indigo-300 dark:border-indigo-800',
      purple:
        'bg-purple-100 dark:bg-purple-200 text-purple-800 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300 border-purple-300 dark:border-purple-800',
      pink: 'bg-pink-100 dark:bg-pink-200 text-pink-800 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300 border-pink-300 dark:border-pink-800',
    },
    hasBorder: {
      enabled: 'border',
      disabled: 'border-0',
    },
    size: {
      xs: 'text-xs p-1',
      sm: 'text-sm p-1.5',
    },
    isPill: {
      enabled: 'rounded-full',
      disabled: 'rounded',
    },
    link: {
      enabled: 'group cursor-pointer',
      disabled: '',
    },
    isIconOnly: {
      enabled: '',
      disabled: 'px-2 py-0.5',
    },
  },
});

/**
 * Generated class definition for `BadgeComponent`
 */
export type BadgeClass = FlowbiteClass;
