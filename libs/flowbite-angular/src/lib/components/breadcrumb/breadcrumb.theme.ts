import { FlowbiteClass } from '../../common';

export interface BreadcrumbProperties {
  customStyle: Partial<BreadcrumbBaseTheme>;
}

export interface BreadcrumbBaseTheme {
  root: Partial<BreadcrumbRootTheme>;
}

export interface BreadcrumbRootTheme {
  base: string;
}

export const breadcrumbTheme: BreadcrumbBaseTheme = {
  root: {
    base: 'flex items-center',
  },
};

export type BreadcrumbClass = FlowbiteClass;

export const BreadcrumbClassInstance: BreadcrumbClass = {
  rootClass: '',
};
