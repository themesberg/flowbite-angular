import type {
  DeepPartial,
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbitePositions,
  FlowbiteSizes,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region Component theme option
export interface ModalSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg' | 'xl'> {
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
  customStyle: DeepPartial<ModalTheme>;
}

export interface ModalTheme {
  root: {
    base: string;
  };
  wrapper: {
    base: string;
    position: ModalPositions;
  };
  container: {
    base: string;
    size: ModalSizes;
  };
  content: {
    base: string;
  };
}

export const modalTheme: ModalTheme = createTheme({
  root: {
    base: '',
  },
  wrapper: {
    base: 'fixed top-0 left-0 right-0 z-[100] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex',
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
});

export interface ModalClass extends FlowbiteClass {
  modalWrapperClass: string;
  modalContainerClass: string;
  modalContentClass: string;
}
