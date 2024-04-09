import {
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbiteSizes,
} from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface BadgeProperties {
  color: keyof BadgeColors;
  size: keyof BadgeSizes;
  isIconOnly: keyof FlowbiteBoolean;
  isPill: keyof FlowbiteBoolean;
  href?: string;
  customStyle: Partial<BadgeBaseTheme>;
}

export interface BadgeBaseTheme {
  root: Partial<BadgeRootTheme>;
}

export interface BadgeRootTheme {
  base: string;
  color: Record<keyof BadgeColors, string>;
  size: Record<keyof BadgeSizes, string>;
  pill: Record<keyof FlowbiteBoolean, string>;
  iconOnly: Record<keyof FlowbiteBoolean, string>;
  href: Record<keyof FlowbiteBoolean, string>;
}

export interface BadgeColors
  extends Pick<
    FlowbiteColors,
    'blue' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink'
  > {
  [key: string]: string;
}

export interface BadgeSizes extends Pick<FlowbiteSizes, 'xs' | 'sm'> {
  [key: string]: string;
}

export const badgeTheme: BadgeBaseTheme = {
  root: {
    base: 'flex h-fit items-center gap-1 font-semibold',
    color: {
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
      dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600',
      red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
      green:
        'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
      yellow:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
      indigo:
        'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300',
      purple:
        'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300',
    },
    size: {
      xs: 'text-xs p-1',
      sm: 'text-sm p-1.5',
    },
    pill: {
      enabled: 'rounded-full',
      disabled: 'rounded',
    },
    href: {
      enabled: 'cursor-pointer',
      disabled: '',
    },
    iconOnly: {
      enabled: '',
      disabled: 'px-2 py-0.5',
    },
  },
};

export interface BadgeClass {
  root: string;
}

export function getClasses(properties: BadgeProperties): BadgeClass {
  const theme: BadgeBaseTheme = mergeTheme(badgeTheme, properties.customStyle);

  const output: BadgeClass = {
    root: twMerge(
      theme.root.base,
      theme.root.color![properties.color],
      theme.root.size![properties.size],
      theme.root.pill![
        properties.isPill == 'enabled' || properties.isIconOnly == 'enabled'
          ? 'enabled'
          : properties.isPill
      ],
      theme.root.iconOnly![properties.isIconOnly],
      theme.root.href![properties.href ? 'enabled' : 'disabled'],
    ),
  };

  return output;
}
