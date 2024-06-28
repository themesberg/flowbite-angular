import type { DeepPartial, FlowbiteClass } from '../../../common';
import { createTheme } from '../../../utils/theme/create-theme';

export interface AddonDirectiveProperties {
  customStyle: DeepPartial<AddonDirectiveBaseTheme>;
}

export interface AddonDirectiveBaseTheme {
  base: string;
}

export const addonDirectiveTheme: AddonDirectiveBaseTheme = createTheme({
  base: 'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600',
});

export type AddonDirectiveClass = FlowbiteClass;

export const addonDirectiveClassInstance: AddonDirectiveClass = {
  rootClass: '',
};
