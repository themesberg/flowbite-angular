import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface BreadcrumbProperties {
  customStyle: DeepPartial<BreadcrumbTheme>;
}

export interface BreadcrumbTheme {
  root: {
    base: string;
  };
}

export const breadcrumbTheme: BreadcrumbTheme = createTheme({
  root: {
    base: 'flex items-center',
  },
});

export type BreadcrumbClass = FlowbiteClass;
