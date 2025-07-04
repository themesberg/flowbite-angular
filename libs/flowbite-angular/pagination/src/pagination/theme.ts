import type { ColorToTheme, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';
import type { FlowbiteBaseButtonColors } from 'flowbite-angular/button';

export interface FlowbitePaginationSizes
  extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbitePaginationColors extends FlowbiteBaseButtonColors {
  [key: string]: ColorToTheme;
}

export interface FlowbitePaginationTheme {
  host: FlowbitePaginationHostTheme;
  container: FlowbitePaginationContainerTheme;
}

export interface FlowbitePaginationHostTheme {
  base: string;
  transition: string;
}

export interface FlowbitePaginationContainerTheme {
  base: string;
  transition: string;
}

export const flowbitePaginationTheme: FlowbitePaginationTheme = createTheme({
  host: {
    base: '',
    transition: '',
  },
  container: {
    base: 'inline-flex -space-x-px text-sm',
    transition: '',
  },
});
