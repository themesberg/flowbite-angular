import { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface BreadcrumbProperties {
  customStyle: DeepPartial<BreadcrumbBaseTheme>;
}

export interface BreadcrumbBaseTheme {
  base: string;
}

export const breadcrumbTheme: BreadcrumbBaseTheme = createTheme({
  base: 'flex items-center',
});

export type BreadcrumbClass = FlowbiteClass;

export const BreadcrumbClassInstance: BreadcrumbClass = {
  rootClass: '',
};
