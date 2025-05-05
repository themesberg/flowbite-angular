import { flowbiteNavbarItemTheme, type FlowbiteNavbarItemTheme } from '../navbar-item/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteNavbarItemConfig {
  /**
   * The default theme of navbar-item
   */
  baseTheme: FlowbiteNavbarItemTheme;
  /**
   * The custom theme of navbar-item
   */
  customTheme: DeepPartial<FlowbiteNavbarItemTheme>;
}

export const defaultFlowbiteNavbarItemConfig: FlowbiteNavbarItemConfig = {
  baseTheme: flowbiteNavbarItemTheme,
  customTheme: {},
};

export const FlowbiteNavbarItemConfigToken = new InjectionToken<FlowbiteNavbarItemConfig>(
  'FlowbiteNavbarItemConfigToken'
);

/**
 * Provide the default NavbarItem configuration
 * @param config The NavbarItem configuration
 * @returns The provider
 */
export const provideFlowbiteNavbarItemConfig = (
  config: Partial<FlowbiteNavbarItemConfig>
): Provider[] => [
  {
    provide: FlowbiteNavbarItemConfigToken,
    useValue: { ...defaultFlowbiteNavbarItemConfig, ...config },
  },
];

/**
 * Inject the NavbarItem configuration
 * @see {@link defaultFlowbiteNavbarItemConfig}
 * @returns The configuration
 */
export const injectFlowbiteNavbarItemConfig = (): FlowbiteNavbarItemConfig =>
  inject(FlowbiteNavbarItemConfigToken, { optional: true }) ?? defaultFlowbiteNavbarItemConfig;
