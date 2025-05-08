import type { FlowbiteSkeletonComponent } from './skeleton.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteSkeletonStateToken =
  createStateToken<FlowbiteSkeletonComponent>('Flowbite Skeleton');
export const provideFlowbiteSkeletonState = createStateProvider(FlowbiteSkeletonStateToken);
export const injectFlowbiteSkeletonState = createStateInjector(FlowbiteSkeletonStateToken);
export const flowbiteSkeletonState = createState(FlowbiteSkeletonStateToken);
