import type { FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteModalSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface FlowbiteModalTheme {
  host: FlowbiteModalHostTheme;
}

export interface FlowbiteModalHostTheme {
  base: string;
  size: FlowbiteModalSizes;
}

export const flowbiteModalTheme: FlowbiteModalTheme = createTheme({
  host: {
    base: 'h-max w-full rounded-lg bg-white shadow dark:bg-gray-700',
    size: {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-4xl',
      xl: 'max-w-7xl',
    },
  },
});
