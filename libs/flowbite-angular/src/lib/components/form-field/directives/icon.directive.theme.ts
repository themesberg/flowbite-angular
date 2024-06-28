import { DeepPartial, FlowbiteClass } from '../../../common';
import { createTheme } from '../../../utils/theme/create-theme';

export interface IconDirectiveProperties {
  customStyle: DeepPartial<IconDirectiveBaseTheme>;
}

export interface IconDirectiveBaseTheme {
  base: string;
}

export const iconDirectiveTheme: IconDirectiveBaseTheme = createTheme({
  base: 'w-5 h-5 text-gray-500 dark:text-gray-400',
});

export type IconDirectiveClass = FlowbiteClass;

export const iconDirectiveClassInstance: IconDirectiveClass = {
  rootClass: '',
};
