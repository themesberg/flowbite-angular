import { DeepPartial } from '../../common';
import {
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbitePositions,
  FlowbiteSizes,
} from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
export interface ModalSizes
  extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface ModalPositions
  extends Pick<
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
  > {
  [key: string]: string;
}
//#endregion

export interface ModalProperties {
  isOpen: keyof FlowbiteBoolean;
  size: keyof ModalSizes;
  position: keyof ModalPositions;
  customStyle: DeepPartial<ModalBaseTheme>;
}

export interface ModalBaseTheme {
  base: string;
  isOpen: FlowbiteBoolean;
  position: ModalPositions;
  container: DeepPartial<ModalContainerRootTheme>;
  content: DeepPartial<ModalContentRootTheme>;
}

export interface ModalContainerRootTheme {
  base: string;
  size: ModalSizes;
}

export interface ModalContentRootTheme {
  base: string;
}

export const modalTheme: ModalBaseTheme = createTheme({
  base: 'fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex',
  isOpen: {
    enabled: '',
    disabled: 'hidden',
  },
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
});

export interface ModalClass extends FlowbiteClass {
  modalContainerClass: string;
  modalContentClass: string;
}

export const ModalClassInstance: ModalClass = {
  modalContainerClass: '',
  modalContentClass: '',
  rootClass: '',
};
