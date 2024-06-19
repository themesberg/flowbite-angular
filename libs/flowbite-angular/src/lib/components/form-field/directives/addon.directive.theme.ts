import { FlowbiteClass } from '../../../common';

export type AddonDirectiveProperties = {
  customStyle: Partial<AddonDirectiveBaseTheme>;
};

export type AddonDirectiveBaseTheme = {
  root: Partial<AddonDirectiveRootTheme>;
};

export type AddonDirectiveRootTheme = {
  base: string;
};

export const addonDirectiveTheme: AddonDirectiveBaseTheme = {
  root: {
    base: 'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600',
  },
};

export type AddonDirectiveClass = FlowbiteClass;

export const addonDirectiveClassInstance: AddonDirectiveClass = {
  rootClass: '',
};
