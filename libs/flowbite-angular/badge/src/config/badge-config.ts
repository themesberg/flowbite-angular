import {
  flowbiteBadgeTheme,
  type FlowbiteBadgeColors,
  type FlowbiteBadgeSizes,
  type FlowbiteBadgeTheme,
} from '../badge/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteBadgeConfig {
  /**
   * The default theme of badge
   */
  baseTheme: FlowbiteBadgeTheme;
  /**
   * The default color of badge
   */
  color: keyof FlowbiteBadgeColors;
  /**
   * Wether the badge has border
   */
  border: boolean;
  /**
   * Wether the badge is pill
   */
  pill: boolean;
  /**
   * The default size of badge
   */
  size: keyof FlowbiteBadgeSizes;
  /**
   * The custom theme of badge
   */
  customTheme: DeepPartial<FlowbiteBadgeTheme>;
}

export const defaultFlowbiteBadgeConfig: FlowbiteBadgeConfig = {
  baseTheme: flowbiteBadgeTheme,
  color: 'default',
  border: false,
  pill: false,
  size: 'sm',
  customTheme: {},
};

export const FlowbiteBadgeConfigToken = new InjectionToken<FlowbiteBadgeConfig>(
  'FlowbiteBadgeConfigToken'
);

/**
 * Provide the default Badge configuration
 * @param config The Badge configuration
 * @returns The provider
 */
export const provideFlowbiteBadgeConfig = (config: Partial<FlowbiteBadgeConfig>): Provider[] => [
  {
    provide: FlowbiteBadgeConfigToken,
    useValue: { ...defaultFlowbiteBadgeConfig, ...config },
  },
];

/**
 * Inject the Badge configuration
 * @see {@link defaultFlowbiteBadgeConfig}
 * @returns The configuration
 */
export const injectFlowbiteBadgeConfig = (): FlowbiteBadgeConfig =>
  inject(FlowbiteBadgeConfigToken, { optional: true }) ?? defaultFlowbiteBadgeConfig;
