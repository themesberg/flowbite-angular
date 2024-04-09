import { FlowbitePositions, FlowbiteSizes } from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface ModalProperties {
  size: keyof ModalSizes;
  position: keyof ModalPositions;
  customStyle: Partial<ModalBaseTheme>;
}

export interface ModalBaseTheme {
  root: Partial<ModalRootTheme>;
  container: Partial<ModalContainerRootTheme>;
  content: Partial<ModalContentRootTheme>;
}

export interface ModalRootTheme {
  base: string;
  position: Record<keyof ModalPositions, string>;
}

export interface ModalContainerRootTheme {
  base: string;
  size: Record<keyof ModalSizes, string>;
}

export interface ModalContentRootTheme {
  base: string;
}

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

export interface ModalClass {
  modalClass: string;
  modalContainerClass: string;
  modalContentClass: string;
}

export function getClasses(properties: ModalProperties): ModalClass {
  const theme: ModalBaseTheme = mergeTheme(modalTheme, properties.customStyle);

  const output: ModalClass = {
    modalClass: twMerge(
      theme.root.base,
      theme.root.position![properties.position],
    ),
    modalContainerClass: twMerge(
      theme.container.base,
      theme.container.size![properties.size],
    ),
    modalContentClass: twMerge(theme.content.base),
  };

  return output;
}
