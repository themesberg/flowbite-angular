import { createTheme } from 'flowbite-angular';

export interface FlowbiteModalFooterTheme {
  host: FlowbiteModalFooterHostTheme;
}

export interface FlowbiteModalFooterHostTheme {
  base: string;
  transition: string;
}

export const flowbiteModalFooterTheme: FlowbiteModalFooterTheme = createTheme({
  host: {
    base: 'flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600',
    transition: '',
  },
});
