import { FlowbiteClass } from '../../common';

export type BreadcrumbProperties = {
  customStyle: Partial<BreadcrumbBaseTheme>;
};

export type BreadcrumbBaseTheme = {
  root: Partial<BreadcrumbRootTheme>;
};

export type BreadcrumbRootTheme = {
  base: string;
};

export const breadcrumbTheme: BreadcrumbBaseTheme = {
  root: {
    base: 'flex items-center',
  },
};

export type BreadcrumbClass = FlowbiteClass;

export const BreadcrumbClassInstance: BreadcrumbClass = {
  rootClass: '',
};
