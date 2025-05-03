import { createTheme } from 'flowbite-angular';

export interface FlowbiteModalHeaderTheme {
  host: FlowbiteModalHeaderHostTheme;
}

export interface FlowbiteModalHeaderHostTheme {
  base: string;
}

export const flowbiteModalHeaderTheme: FlowbiteModalHeaderTheme = createTheme({
  host: {
    base: 'items-center justify-between rounded-t border-b border-gray-200 p-5 text-xl font-medium text-gray-900 dark:border-gray-600 dark:text-white',
  },
});
