import type { FlowbiteModalHeaderComponent } from './modal-header.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalHeaderStateToken =
  createStateToken<FlowbiteModalHeaderComponent>('Flowbite ModalHeader');
export const provideFlowbiteModalHeaderState = createStateProvider(FlowbiteModalHeaderStateToken);
export const injectFlowbiteModalHeaderState = createStateInjector(FlowbiteModalHeaderStateToken);
export const flowbiteModalHeaderState = createState(FlowbiteModalHeaderStateToken);
