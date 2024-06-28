import type { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';
import type { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import { createTheme } from '../../utils/theme/create-theme';

export interface BreadcrumbItemProperties {
  link?: FlowbiteLink;
  customStyle: DeepPartial<BreadcrumbItemBaseTheme>;
}

export interface BreadcrumbItemBaseTheme {
  base: FlowbiteBoolean;
  icon: DeepPartial<BreadcrumbIconRootTheme>;
}

export interface BreadcrumbIconRootTheme {
  base: string;
}

export const breadcrumbItemTheme: BreadcrumbItemBaseTheme = createTheme({
  base: {
    enabled:
      'cursor-pointer flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
    disabled: 'flex items-center text-sm font-medium text-gray-500 dark:text-gray-400',
  },
  icon: {
    base: 'mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2',
  },
});

export interface BreadcrumbItemClass extends FlowbiteClass {
  breadcrumbIconClass: string;
}

export const BreadcrumbItemClassInstance: BreadcrumbItemClass = {
  breadcrumbIconClass: '',
  rootClass: '',
};
