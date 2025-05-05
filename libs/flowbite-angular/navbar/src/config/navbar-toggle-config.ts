import { flowbiteNavbarToggleTheme, type FlowbiteNavbarToggleTheme } from '../navbar-toggle/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteNavbarToggleConfig {
  /**
   * The default theme of navbar-toggle
   */
  baseTheme: FlowbiteNavbarToggleTheme;
  /**
   * The custom theme of navbar-toggle
   */
  customTheme: DeepPartial<FlowbiteNavbarToggleTheme>;
}

export const defaultFlowbiteNavbarToggleConfig: FlowbiteNavbarToggleConfig = {
  baseTheme: flowbiteNavbarToggleTheme,
  customTheme: {},
};

export const FlowbiteNavbarToggleConfigToken = new InjectionToken<FlowbiteNavbarToggleConfig>(
  'FlowbiteNavbarToggleConfigToken'
);

/**
 * Provide the default NavbarToggle configuration
 * @param config The NavbarToggle configuration
 * @returns The provider
 */
export const provideFlowbiteNavbarToggleConfig = (
  config: Partial<FlowbiteNavbarToggleConfig>
): Provider[] => [
  {
    provide: FlowbiteNavbarToggleConfigToken,
    useValue: { ...defaultFlowbiteNavbarToggleConfig, ...config },
  },
];

/**
 * Inject the NavbarToggle configuration
 * @see {@link defaultFlowbiteNavbarToggleConfig}
 * @returns The configuration
 */
export const injectFlowbiteNavbarToggleConfig = (): FlowbiteNavbarToggleConfig =>
  inject(FlowbiteNavbarToggleConfigToken, { optional: true }) ?? defaultFlowbiteNavbarToggleConfig;
