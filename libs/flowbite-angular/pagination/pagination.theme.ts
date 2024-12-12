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
});

/**
 * Generated class definition for `PaginationComponent`
 */
export interface PaginationClass extends FlowbiteClass {
  navigationClass: string;
}
