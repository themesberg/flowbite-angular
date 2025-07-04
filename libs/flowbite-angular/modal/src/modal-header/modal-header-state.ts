import type { ModalHeader } from './modal-header.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalHeaderStateToken = createStateToken<ModalHeader>('Flowbite ModalHeader');
export const provideFlowbiteModalHeaderState = createStateProvider(FlowbiteModalHeaderStateToken);
export const injectFlowbiteModalHeaderState = createStateInjector(FlowbiteModalHeaderStateToken);
export const flowbiteModalHeaderState = createState(FlowbiteModalHeaderStateToken);
