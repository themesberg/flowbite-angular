import { flowbiteNavbarBrandTheme, type FlowbiteNavbarBrandTheme } from '../navbar-brand/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteNavbarBrandConfig {
  /**
   * The default theme of navbar-brand
   */
  baseTheme: FlowbiteNavbarBrandTheme;
  /**
   * The custom theme of navbar-brand
   */
  customTheme: DeepPartial<FlowbiteNavbarBrandTheme>;
}

export const defaultFlowbiteNavbarBrandConfig: FlowbiteNavbarBrandConfig = {
  baseTheme: flowbiteNavbarBrandTheme,
  customTheme: {},
};

export const FlowbiteNavbarBrandConfigToken = new InjectionToken<FlowbiteNavbarBrandConfig>(
  'FlowbiteNavbarBrandConfigToken'
);

/**
 * Provide the default NavbarBrand configuration
 * @param config The NavbarBrand configuration
 * @returns The provider
 */
export const provideFlowbiteNavbarBrandConfig = (
  config: Partial<FlowbiteNavbarBrandConfig>
): Provider[] => [
  {
    provide: FlowbiteNavbarBrandConfigToken,
    useValue: { ...defaultFlowbiteNavbarBrandConfig, ...config },
  },
];

/**
 * Inject the NavbarBrand configuration
 * @see {@link defaultFlowbiteNavbarBrandConfig}
 * @returns The configuration
 */
export const injectFlowbiteNavbarBrandConfig = (): FlowbiteNavbarBrandConfig =>
  inject(FlowbiteNavbarBrandConfigToken, { optional: true }) ?? defaultFlowbiteNavbarBrandConfig;
