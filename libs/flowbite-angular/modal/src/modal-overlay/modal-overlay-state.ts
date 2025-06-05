import type { FlowbiteModalOverlay } from './modal-overlay.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalOverlayStateToken =
  createStateToken<FlowbiteModalOverlay>('Flowbite ModalOverlay');
export const provideFlowbiteModalOverlayState = createStateProvider(FlowbiteModalOverlayStateToken);
export const injectFlowbiteModalOverlayState = createStateInjector(FlowbiteModalOverlayStateToken);
export const flowbiteModalOverlayState = createState(FlowbiteModalOverlayStateToken);
