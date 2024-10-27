import type {
  DeepPartial,
  FlowbiteClass,
  FlowbiteColors,
  FlowbitePositions,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region region Component theme option
export interface ScrollTopColors
  extends Pick<
    FlowbiteColors,
    'primary' | 'dark' | 'blue' | 'gray' | 'green' | 'lime' | 'purple' | 'red'
  > {
  [key: string]: string;
}

export interface ScrollTopPositions extends Omit<FlowbitePositions, 'center'> {
  [key: string]: string;
}
//#endregion

export interface ScrollTopProperties {
  color: keyof ScrollTopPositions;
  position: keyof ScrollTopPositions;
  customStyle: DeepPartial<ScrollTopTheme>;
}

export interface ScrollTopTheme {
  root: {
    base: string;
    color: ScrollTopColors;
    position: ScrollTopPositions;
  };
}

export const scrollTopTheme: ScrollTopTheme = createTheme({
  root: {
    base: 'cursor-pointer fixed flex flex-row place-items-center p-2 rounded-lg',
    color: {
      primary: 'bg-primary-100',
      dark: 'bg-gray-100 dark:bg-gray-800 dark:text-white',
      blue: 'bg-blue-100',
      gray: 'bg-gray-100',
      green: 'bg-green-100',
      lime: 'bg-lime-100',
      purple: 'bg-purple-100',
      red: 'bg-red-100',
    },
    position: {
      'bottom-center': 'bottom-3 left-1/2 right-1/2',
      'bottom-left': 'bottom-3 left-3',
      'bottom-right': 'bottom-3 right-3',
      'center-left': 'left-3 top-1/2 bottom-1/2',
      'center-right': 'right-3 top-1/2 bottom-1/2',
      'top-center': 'top-3 left-1/2 right-1/2',
      'top-left': 'top-3 left-3',
      'top-right': 'top-3 right-3',
    },
  },
});

export type ScrollTopClass = FlowbiteClass;
