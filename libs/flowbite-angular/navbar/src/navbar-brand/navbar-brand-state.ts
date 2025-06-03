import type { FlowbiteNavbarBrand } from './navbar-brand.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarBrandStateToken =
  createStateToken<FlowbiteNavbarBrand>('Flowbite NavbarBrand');
export const provideFlowbiteNavbarBrandState = createStateProvider(FlowbiteNavbarBrandStateToken);
export const injectFlowbiteNavbarBrandState = createStateInjector(FlowbiteNavbarBrandStateToken);
export const flowbiteNavbarBrandState = createState(FlowbiteNavbarBrandStateToken);
