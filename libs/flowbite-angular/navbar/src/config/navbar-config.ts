import type { FlowbiteNavbarColors } from '../navbar/theme';
import { flowbiteNavbarTheme, type FlowbiteNavbarTheme } from '../navbar/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteNavbarConfig {
  /**
   * The default theme of navbar
   */
  baseTheme: FlowbiteNavbarTheme;
  /**
   * Whether the navbar is fixed
   */
  fixed: boolean;
  /**
   * Whether the navbar is open
   */
  open: boolean;
  /**
   * The color of navbar
   */
  color: keyof FlowbiteNavbarColors;
  /**
   * The custom theme of navbar
   */
  customTheme: DeepPartial<FlowbiteNavbarTheme>;
}

export const defaultFlowbiteNavbarConfig: FlowbiteNavbarConfig = {
  baseTheme: flowbiteNavbarTheme,
  fixed: false,
  open: false,
  color: 'light',
  customTheme: {},
};

export const FlowbiteNavbarConfigToken = new InjectionToken<FlowbiteNavbarConfig>(
  'FlowbiteNavbarConfigToken'
);

/**
 * Provide the default Navbar configuration
 * @param config The Navbar configuration
 * @returns The provider
 */
export const provideFlowbiteNavbarConfig = (config: Partial<FlowbiteNavbarConfig>): Provider[] => [
  {
    provide: FlowbiteNavbarConfigToken,
    useValue: { ...defaultFlowbiteNavbarConfig, ...config },
  },
];

/**
 * Inject the Navbar configuration
 * @see {@link defaultFlowbiteNavbarConfig}
 * @returns The configuration
 */
export const injectFlowbiteNavbarConfig = (): FlowbiteNavbarConfig =>
  inject(FlowbiteNavbarConfigToken, { optional: true }) ?? defaultFlowbiteNavbarConfig;
