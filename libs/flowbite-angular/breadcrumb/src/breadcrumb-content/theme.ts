import { createTheme } from 'flowbite-angular';

export interface FlowbiteBreadcrumbContentTheme {
  host: FlowbiteBreadcrumbContentHostTheme;
}

export interface FlowbiteBreadcrumbContentHostTheme {
  base: string;
}

export const flowbiteBreadcrumbContentTheme: FlowbiteBreadcrumbContentTheme = createTheme({
  host: {
    base: 'inline-flex items-center space-x-1 md:space-x-2',
  },
});
