import { createTheme } from 'flowbite-angular';

export interface FlowbiteSkeletonTheme {
  host: FlowbiteSkeletonHostTheme;
  item: FlowbiteSkeletonItemTheme;
}

export interface FlowbiteSkeletonHostTheme {
  base: string;
}

export interface FlowbiteSkeletonItemTheme {
  base: string;
}

export const flowbiteSkeletonTheme: FlowbiteSkeletonTheme = createTheme({
  host: {
    base: 'max-w-screen animate-pulse',
  },
  item: {
    base: 'mb-2.5 h-2 max-h-12 max-w-48 rounded-full bg-gray-200 dark:bg-gray-700',
  },
});
