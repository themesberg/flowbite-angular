import {
  flowbiteNavbarContentTheme,
  type FlowbiteNavbarContentTheme,
} from '../navbar-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteNavbarContentConfig {
  /**
   * The default theme of navbar-content
   */
  baseTheme: FlowbiteNavbarContentTheme;
  /**
   * The custom theme of navbar-content
   */
  customTheme: DeepPartial<FlowbiteNavbarContentTheme>;
}

export const defaultFlowbiteNavbarContentConfig: FlowbiteNavbarContentConfig = {
  baseTheme: flowbiteNavbarContentTheme,
  customTheme: {},
};

export const FlowbiteNavbarContentConfigToken = new InjectionToken<FlowbiteNavbarContentConfig>(
  'FlowbiteNavbarContentConfigToken'
);

/**
 * Provide the default NavbarContent configuration
 * @param config The NavbarContent configuration
 * @returns The provider
 */
export const provideFlowbiteNavbarContentConfig = (
  config: Partial<FlowbiteNavbarContentConfig>
): Provider[] => [
  {
    provide: FlowbiteNavbarContentConfigToken,
    useValue: { ...defaultFlowbiteNavbarContentConfig, ...config },
  },
];

/**
 * Inject the NavbarContent configuration
 * @see {@link defaultFlowbiteNavbarContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteNavbarContentConfig = (): FlowbiteNavbarContentConfig =>
  inject(FlowbiteNavbarContentConfigToken, { optional: true }) ??
  defaultFlowbiteNavbarContentConfig;
