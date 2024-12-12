import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `PaginationButtonDirective`
 */
export interface PaginationButtonProperties {
  active: keyof FlowbiteBoolean;
  customStyle: DeepPartial<PaginationButtonTheme>;
}

/**
 * Theme definition for `PaginationButtonDirective`
 */
export interface PaginationButtonTheme {
  root: {
    base: string;
    active: FlowbiteBoolean;
  };
}

/**
 * Default theme value for `PaginationButtonDirective`
 */
export const paginationButtonTheme: PaginationButtonTheme = createTheme({
  root: {
    base: 'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white first:rounded-l-lg last:rounded-r-lg',
    active: {
      enabled: 'bg-red-500 dark:bg-red-700',
      disabled: '',
    },
  },
});

/**
 * Generated class definition for `PaginationButtonDirective`
 */
export type PaginationButtonClass = FlowbiteClass;
