import type { FlowbiteModalHeader } from './modal-header.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalHeaderStateToken =
  createStateToken<FlowbiteModalHeader>('Flowbite ModalHeader');
export const provideFlowbiteModalHeaderState = createStateProvider(FlowbiteModalHeaderStateToken);
export const injectFlowbiteModalHeaderState = createStateInjector(FlowbiteModalHeaderStateToken);
export const flowbiteModalHeaderState = createState(FlowbiteModalHeaderStateToken);
