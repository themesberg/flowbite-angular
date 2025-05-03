import type { FlowbiteModalOverlayComponent } from './modal-overlay.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalOverlayStateToken =
  createStateToken<FlowbiteModalOverlayComponent>('Flowbite ModalOverlay');
export const provideFlowbiteModalOverlayState = createStateProvider(FlowbiteModalOverlayStateToken);
export const injectFlowbiteModalOverlayState = createStateInjector(FlowbiteModalOverlayStateToken);
export const flowbiteModalOverlayState = createState(FlowbiteModalOverlayStateToken);
