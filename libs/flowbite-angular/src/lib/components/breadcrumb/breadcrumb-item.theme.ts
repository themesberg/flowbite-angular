import { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';
import { FlowbiteLink } from '../../common/flowbite.type';

export type BreadcrumbItemProperties = {
  link?: FlowbiteLink;
  customStyle: Partial<BreadcrumbItemBaseTheme>;
};

export type BreadcrumbItemBaseTheme = {
  root: Partial<BreadcrumbItemRootTheme>;
  icon: Partial<BreadcrumbIconRootTheme>;
};

export type BreadcrumbItemRootTheme = {
  base: Record<keyof FlowbiteBoolean, string>;
};

export type BreadcrumbIconRootTheme = {
  base: string;
};

export const breadcrumbItemTheme: BreadcrumbItemBaseTheme = {
  root: {
    base: {
      enabled:
        'cursor-pointer flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
      disabled:
        'flex items-center text-sm font-medium text-gray-500 dark:text-gray-400',
    },
  },
  icon: {
    base: 'mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2',
  },
};

export type BreadcrumbItemClass = FlowbiteClass & {
  breadcrumbIconClass: string;
};

export const BreadcrumbItemClassInstance: BreadcrumbItemClass = {
  breadcrumbIconClass: '',
  rootClass: '',
};
