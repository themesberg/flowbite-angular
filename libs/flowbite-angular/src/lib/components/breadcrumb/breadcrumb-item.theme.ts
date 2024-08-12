import type { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';
import type { DeepPartial, RouterLinkParameter } from '../../common/flowbite.type';
import { createTheme } from '../../utils/theme/create-theme';

export interface BreadcrumbItemProperties {
  link: RouterLinkParameter;
  customStyle: DeepPartial<BreadcrumbItemTheme>;
}

export interface BreadcrumbItemTheme {
  root: {
    base: string;
    href: FlowbiteBoolean;
  };
  icon: {
    base: string;
  };
}

export const breadcrumbItemTheme: BreadcrumbItemTheme = createTheme({
  root: {
    base: 'flex items-center text-sm font-medium text-gray-700 dark:text-gray-400',
    href: {
      enabled: 'hover:text-gray-900 dark:hover:text-white',
      disabled: '',
    },
  },
  icon: {
    base: 'mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2',
  },
});

export interface BreadcrumbItemClass extends FlowbiteClass {
  breadcrumbIconClass: string;
}
