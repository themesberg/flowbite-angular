import { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface BreadcrumbItemProperties {
  href?: string;
  customStyle: Partial<BreadcrumbItemBaseTheme>;
}

export interface BreadcrumbItemBaseTheme {
  root: Partial<BreadcrumbItemRootTheme>;
  icon: Partial<BreadcrumbIconRootTheme>;
  item: Partial<BreadcrumbItemContentTheme>;
}

export interface BreadcrumbItemRootTheme {
  base: string;
}

export interface BreadcrumbIconRootTheme {
  base: string;
}

export interface BreadcrumbItemContentTheme {
  base: Record<keyof FlowbiteBoolean, string>;
}

export const breadcrumbItemTheme: BreadcrumbItemBaseTheme = {
  root: {
    base: 'group flex items-center',
  },
  icon: {
    base: 'mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2',
  },
  item: {
    base: {
      enabled:
        'flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
      disabled:
        'flex items-center text-sm font-medium text-gray-500 dark:text-gray-400',
    },
  },
};

export interface BreadcrumbItemClass extends FlowbiteClass {
  breadcrumbIconClass: string;
  contentClass: string;
}

export function BreadcrumbItemClassInstance(): BreadcrumbItemClass {
  return { rootClass: '', breadcrumbIconClass: '', contentClass: '' };
}

export function getClasses(
  properties: BreadcrumbItemProperties,
): BreadcrumbItemClass {
  const theme: BreadcrumbItemBaseTheme = mergeTheme(
    breadcrumbItemTheme,
    properties.customStyle,
  );

  const output: BreadcrumbItemClass = {
    rootClass: twMerge(theme.root.base),
    breadcrumbIconClass: twMerge(theme.icon.base),
    contentClass: twMerge(
      theme.item.base?.[properties.href ? 'enabled' : 'disabled'],
    ),
  };

  return output;
}
