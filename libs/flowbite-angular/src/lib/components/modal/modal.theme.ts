import {
  FlowbiteClass,
  FlowbitePositions,
  FlowbiteSizes,
} from '../../common/flowbite.theme';

//#region Component theme option
export type ModalSizes = Pick<FlowbiteSizes, 'sm' | 'md' | 'lg' | 'xl'> & {
  [key: string]: string;
};

export type ModalPositions = Pick<
  FlowbitePositions,
  | 'center'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
  | 'center-left'
  | 'center-right'
> & {
  [key: string]: string;
};
//#endregion

export type ModalProperties = {
  size: keyof ModalSizes;
  position: keyof ModalPositions;
  customStyle: Partial<ModalBaseTheme>;
};

export type ModalBaseTheme = {
  root: Partial<ModalRootTheme>;
  container: Partial<ModalContainerRootTheme>;
  content: Partial<ModalContentRootTheme>;
};

export type ModalRootTheme = {
  base: string;
  position: Record<keyof ModalPositions, string>;
};

export type ModalContainerRootTheme = {
  base: string;
  size: Record<keyof ModalSizes, string>;
};

export type ModalContentRootTheme = {
  base: string;
};

export const modalTheme: ModalBaseTheme = {
  root: {
    base: 'fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex',
    position: {
      'top-left': 'items-start justify-start',
      'top-center': 'items-start justify-center',
      'top-right': 'items-start justify-end',
      'center-left': 'items-center justify-start',
      center: 'items-center justify-center',
      'center-right': 'items-center justify-end',
      'bottom-left': 'items-end justify-start',
      'bottom-center': 'items-end justify-center',
      'bottom-right': 'items-end justify-end',
    },
  },
  container: {
    base: 'relative w-full h-full md:h-auto',
    size: {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-4xl',
      xl: 'max-w-7xl',
    },
  },
  content: {
    base: 'relative bg-white rounded-lg shadow dark:bg-gray-700',
  },
};

export type ModalClass = FlowbiteClass & {
  modalClass: string;
  modalContainerClass: string;
  modalContentClass: string;
};

export const ModalClassInstance: ModalClass = {
  modalClass: '',
  modalContainerClass: '',
  modalContentClass: '',
  rootClass: '',
};
