import type { NavbarBrand } from './navbar-brand.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarBrandStateToken = createStateToken<NavbarBrand>('Flowbite NavbarBrand');
export const provideFlowbiteNavbarBrandState = createStateProvider(FlowbiteNavbarBrandStateToken);
export const injectFlowbiteNavbarBrandState = createStateInjector(FlowbiteNavbarBrandStateToken);
export const flowbiteNavbarBrandState = createState(FlowbiteNavbarBrandStateToken);
