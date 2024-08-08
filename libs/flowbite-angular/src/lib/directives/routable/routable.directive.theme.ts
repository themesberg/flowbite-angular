import type { DeepPartial, FlowbiteBoolean, FlowbiteClass, FlowbiteLink } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface RoutableDirectiveProperties {
  href?: FlowbiteLink;
  customStyle: DeepPartial<RoutableDirectiveBaseTheme>;
}

export interface RoutableDirectiveBaseTheme {
  base: string;
  href: FlowbiteBoolean;
}

export const routableDirectiveTheme: RoutableDirectiveBaseTheme = createTheme({
  base: '',
  href: {
    enabled: 'cursor-pointer',
    disabled: '',
  },
});

export type RoutableDirectiveClass = FlowbiteClass;

export const RoutableDirectiveClassInstance: RoutableDirectiveClass = {
  rootClass: '',
};
