import type { DeepPartial, FlowbiteClass, FlowbiteColors, FlowbitePositions } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

//#region region Component theme option
export interface ScrollTopColors extends Pick<FlowbiteColors, 'blue' | 'gray' | 'green' | 'lime' | 'purple' | 'red'> {
  [key: string]: string;
}

export interface ScrollTopPositions extends Omit<FlowbitePositions, 'center'> {
  [key: string]: string;
}
//#endregion

export interface ScrollTopProperties {
  color: keyof ScrollTopPositions;
  position: keyof ScrollTopPositions;
  customStyle: DeepPartial<ScrollTopBaseTheme>;
}

export interface ScrollTopBaseTheme {
  base: string;
  color: ScrollTopColors;
  position: ScrollTopPositions;
}

export const scrollTopTheme: ScrollTopBaseTheme = createTheme({
  base: 'cursor-pointer fixed flex flex-row place-items-center p-2 rounded-lg',
  color: {
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
});

export type ScrollTopClass = FlowbiteClass;

export const scrollTopClassInstance: ScrollTopClass = {
  rootClass: '',
};
