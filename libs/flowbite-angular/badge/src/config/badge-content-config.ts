import { flowbiteBadgeContentTheme, type FlowbiteBadgeContentTheme } from '../badge-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteBadgeContentConfig {
  /**
   * The default theme of BadgeContent
   */
  baseTheme: FlowbiteBadgeContentTheme;

  /**
   * The custom theme of BadgeContent
   */
  customTheme: DeepPartial<FlowbiteBadgeContentTheme>;
}

export const defaultFlowbiteBadgeContentConfig: FlowbiteBadgeContentConfig = {
  baseTheme: flowbiteBadgeContentTheme,
  customTheme: {},
};

export const FlowbiteBadgeContentConfigToken = new InjectionToken<FlowbiteBadgeContentConfig>(
  'FlowbiteBadgeContentConfigToken'
);

/**
 * Provide the default BadgeContent configuration
 * @param config The BadgeContent configuration
 * @returns The provider
 */
export const provideFlowbiteBadgeContentConfig = (
  config: Partial<FlowbiteBadgeContentConfig>
): Provider[] => [
  {
    provide: FlowbiteBadgeContentConfigToken,
    useValue: { ...defaultFlowbiteBadgeContentConfig, ...config },
  },
];

/**
 * Inject the BadgeContent configuration
 * @see {@link defaultFlowbiteBadgeContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteBadgeContentConfig = (): FlowbiteBadgeContentConfig =>
  inject(FlowbiteBadgeContentConfigToken, { optional: true }) ?? defaultFlowbiteBadgeContentConfig;
