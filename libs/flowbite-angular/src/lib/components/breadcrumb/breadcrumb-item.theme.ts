import type { FlowbiteClass } from '../../common/flowbite.theme';
import type { DeepPartial } from '../../common/flowbite.type';
import { createTheme } from '../../utils/theme/create-theme';
import type { BreadcrumbColors } from './breadcrumb.theme';

import type { UrlTree } from '@angular/router';

export interface BreadcrumbItemProperties {
  color: keyof BreadcrumbColors;
  link: UrlTree | null;
  customStyle: DeepPartial<BreadcrumbItemTheme>;
}

export interface BreadcrumbItemTheme {
  root: {
    base: string;
    color: BreadcrumbColors;
  };
  icon: {
    base: string;
  };
}

export const breadcrumbItemTheme: BreadcrumbItemTheme = createTheme({
  root: {
    base: 'group flex items-center text-sm font-medium cursor-pointer',
    color: {
      primary: 'text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-500',
      dark: 'text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
      blue: 'text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-500',
      red: 'text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-500',
      green: 'text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-500',
      yellow: 'text-yellow-700 dark:text-yellow-400 hover:text-yellow-900 dark:hover:text-yellow-500',
    },
  },
  icon: {
    base: 'mx-1 h-6 w-6 md:mx-2 group-first:hidden',
  },
});

export interface BreadcrumbItemClass extends FlowbiteClass {
  breadcrumbIconClass: string;
}
