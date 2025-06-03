import {
  flowbiteBreadcumbContentTheme,
  type FlowbiteBreadcumbContentTheme,
} from '../breadcumb-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteBreadcumbContentConfig {
  /**
   * The default theme of BreadcumbContent
   */
  baseTheme: FlowbiteBreadcumbContentTheme;

  /**
   * The custom theme of BreadcumbContent
   */
  customTheme: DeepPartial<FlowbiteBreadcumbContentTheme>;
}

export const defaultFlowbiteBreadcumbContentConfig: FlowbiteBreadcumbContentConfig = {
  baseTheme: flowbiteBreadcumbContentTheme,
  customTheme: {},
};

export const FlowbiteBreadcumbContentConfigToken =
  new InjectionToken<FlowbiteBreadcumbContentConfig>('FlowbiteBreadcumbContentConfigToken');

/**
 * Provide the default BreadcumbContent configuration
 * @param config The BreadcumbContent configuration
 * @returns The provider
 */
export const provideFlowbiteBreadcumbContentConfig = (
  config: Partial<FlowbiteBreadcumbContentConfig>
): Provider[] => [
  {
    provide: FlowbiteBreadcumbContentConfigToken,
    useValue: { ...defaultFlowbiteBreadcumbContentConfig, ...config },
  },
];

/**
 * Inject the BreadcumbContent configuration
 * @see {@link defaultFlowbiteBreadcumbContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteBreadcumbContentConfig = (): FlowbiteBreadcumbContentConfig =>
  inject(FlowbiteBreadcumbContentConfigToken, { optional: true }) ??
  defaultFlowbiteBreadcumbContentConfig;
