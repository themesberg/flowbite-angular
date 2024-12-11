import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

export interface PaginationNavigation {
  icon: string;
  text: string;
  both: string;
}

/**
 * Required properties for class generation of `PaginationComponent`
 */
export interface PaginationProperties {
  customStyle: DeepPartial<PaginationTheme>;
}

/**
 * Theme definition for `NavbarComponent`
 */
export interface PaginationTheme {
  root: {
    base: string;
  };
  navigation: {
    base: string;
  };
  listItem: {
    base: string;
    active: string;
  };
}

/**
 * Default theme for `PaginationComponent`
 */
export const paginationTheme: PaginationTheme = createTheme({
  root: {
    base: '',
  },
  navigation: {
    base: 'inline-flex -space-x-px',
  },
  listItem: {
    base: 'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white first:rounded-l-lg last:rounded-r-lg',
    active: '',
  },
});

/**
 * Generated class definition for `PaginationComponent`
 */
export interface PaginationClass extends FlowbiteClass {
  navigationClass: string;
  listItemClass: string;
}
