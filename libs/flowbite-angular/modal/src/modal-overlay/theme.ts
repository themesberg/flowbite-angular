import type { FlowbitePositions } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteModalOverlayPositions
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

export interface FlowbiteModalOverlayTheme {
  host: FlowbiteModalOverlayHostTheme;
}

export interface FlowbiteModalOverlayHostTheme {
  base: string;
  transition: string;
  position: FlowbiteModalOverlayPositions;
}

export const flowbiteModalOverlayTheme: FlowbiteModalOverlayTheme = createTheme({
  host: {
    base: 'fixed inset-0 flex bg-gray-900/50 p-4 dark:bg-gray-900/80',
    transition: '',
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
});
