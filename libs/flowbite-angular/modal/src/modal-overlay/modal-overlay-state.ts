import type { ModalOverlay } from './modal-overlay.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalOverlayStateToken =
  createStateToken<ModalOverlay>('Flowbite ModalOverlay');
export const provideFlowbiteModalOverlayState = createStateProvider(FlowbiteModalOverlayStateToken);
export const injectFlowbiteModalOverlayState = createStateInjector(FlowbiteModalOverlayStateToken);
export const flowbiteModalOverlayState = createState(FlowbiteModalOverlayStateToken);
