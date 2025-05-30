import type { FlowbiteClipboardComponent } from './clipboard.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteClipboardStateToken =
  createStateToken<FlowbiteClipboardComponent>('Flowbite Clipboard');
export const provideFlowbiteClipboardState = createStateProvider(FlowbiteClipboardStateToken);
export const injectFlowbiteClipboardState = createStateInjector(FlowbiteClipboardStateToken);
export const flowbiteClipboardState = createState(FlowbiteClipboardStateToken);
