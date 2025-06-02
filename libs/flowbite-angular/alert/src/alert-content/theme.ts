import { createTheme } from 'flowbite-angular';

export interface FlowbiteAlertContentTheme {
  host: FlowbiteAlertContentHostTheme;
}

export interface FlowbiteAlertContentHostTheme {
  base: string;
  children: {
    base: string;
    icon: {
      base: string;
    };
  };
}

export const flowbiteAlertContentTheme: FlowbiteAlertContentTheme = createTheme({
  host: {
    base: 'flex items-center text-sm',
    children: {
      base: '*:not-[flowbite-icon]:not-[&_[flowbiteAlertButton]]:flex-1',
      icon: {
        base: '*:[flowbite-icon]:first:mr-2',
      },
    },
  },
});
