import {
  flowbiteNavbarIconItemTheme,
  type FlowbiteNavbarIconItemTheme,
} from '../navbar-icon-item/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteNavbarIconItemConfig {
  /**
   * The default theme of NavbarIconItem
   */
  baseTheme: FlowbiteNavbarIconItemTheme;

  /**
   * The custom theme of NavbarIconItem
   */
  customTheme: DeepPartial<FlowbiteNavbarIconItemTheme>;
}

export const defaultFlowbiteNavbarIconItemConfig: FlowbiteNavbarIconItemConfig = {
  baseTheme: flowbiteNavbarIconItemTheme,
  customTheme: {},
};

export const FlowbiteNavbarIconItemConfigToken = new InjectionToken<FlowbiteNavbarIconItemConfig>(
  'FlowbiteNavbarIconItemConfigToken'
);

/**
 * Provide the default NavbarIconItem configuration
 * @param config The NavbarIconItem configuration
 * @returns The provider
 */
export const provideFlowbiteNavbarIconItemConfig = (
  config: Partial<FlowbiteNavbarIconItemConfig>
): Provider[] => [
  {
    provide: FlowbiteNavbarIconItemConfigToken,
    useValue: { ...defaultFlowbiteNavbarIconItemConfig, ...config },
  },
];

/**
 * Inject the NavbarIconItem configuration
 * @see {@link defaultFlowbiteNavbarIconItemConfig}
 * @returns The configuration
 */
export const injectFlowbiteNavbarIconItemConfig = (): FlowbiteNavbarIconItemConfig =>
  inject(FlowbiteNavbarIconItemConfigToken, { optional: true }) ??
  defaultFlowbiteNavbarIconItemConfig;
