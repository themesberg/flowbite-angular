import { FlowbiteClass, FlowbiteColors, FlowbitePositions } from '../../common';

//#region region Component theme option
export type ScrollTopColors = Pick<
  FlowbiteColors,
  'blue' | 'gray' | 'green' | 'lime' | 'purple' | 'red'
> & {
  [key: string]: string;
};

export type ScrollTopPositions = Omit<FlowbitePositions, 'center'> & {
  [key: string]: string;
};
//#endregion

export type ScrollTopProperties = {
  color: keyof ScrollTopPositions;
  position: keyof ScrollTopPositions;
  customStyle: Partial<ScrollTopBaseTheme>;
};

export type ScrollTopBaseTheme = {
  root: Partial<ScrollTopRootTheme>;
};

export type ScrollTopRootTheme = {
  base: string;
  color: Record<keyof ScrollTopColors, string>;
  position: Record<keyof ScrollTopPositions, string>;
};

export const scrollTopTheme: ScrollTopBaseTheme = {
  root: {
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
  },
};

export type ScrollTopClass = FlowbiteClass;

export const scrollTopClassInstance: ScrollTopClass = {
  rootClass: '',
};
