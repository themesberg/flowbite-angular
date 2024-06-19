import { FlowbiteClass } from '../../../common';

export type IconDirectiveProperties = {
  customStyle: Partial<IconDirectiveBaseTheme>;
};

export type IconDirectiveBaseTheme = {
  root: Partial<IconDirectiveRootTheme>;
};

export type IconDirectiveRootTheme = {
  base: string;
};

export const iconDirectiveTheme: IconDirectiveBaseTheme = {
  root: {
    base: 'w-5 h-5 text-gray-500 dark:text-gray-400',
  },
};

export type IconDirectiveClass = FlowbiteClass;

export const iconDirectiveClassInstance: IconDirectiveClass = {
  rootClass: '',
};
