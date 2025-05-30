import type { FlowbitePaginationColors, FlowbitePaginationSizes } from '../pagination/theme';
import { flowbitePaginationTheme, type FlowbitePaginationTheme } from '../pagination/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbitePaginationConfig {
  /**
   * The default theme of pagination
   */
  baseTheme: FlowbitePaginationTheme;
  /**
   * The default tabs number of pagination
   */
  tabs: number;
  /**
   * The default color of pagination
   */
  color: keyof FlowbitePaginationColors;
  /**
   * The default size of pagination
   */
  size: keyof FlowbitePaginationSizes;
  /**
   * The custom theme of pagination
   */
  customTheme: DeepPartial<FlowbitePaginationTheme>;
}

export const defaultFlowbitePaginationConfig: FlowbitePaginationConfig = {
  baseTheme: flowbitePaginationTheme,
  tabs: 5,
  color: 'info',
  size: 'md',
  customTheme: {},
};

export const FlowbitePaginationConfigToken = new InjectionToken<FlowbitePaginationConfig>(
  'FlowbitePaginationConfigToken'
);

/**
 * Provide the default Pagination configuration
 * @param config The Pagination configuration
 * @returns The provider
 */
export const provideFlowbitePaginationConfig = (
  config: Partial<FlowbitePaginationConfig>
): Provider[] => [
  {
    provide: FlowbitePaginationConfigToken,
    useValue: { ...defaultFlowbitePaginationConfig, ...config },
  },
];

/**
 * Inject the Pagination configuration
 * @see {@link defaultFlowbitePaginationConfig}
 * @returns The configuration
 */
export const injectFlowbitePaginationConfig = (): FlowbitePaginationConfig =>
  inject(FlowbitePaginationConfigToken, { optional: true }) ?? defaultFlowbitePaginationConfig;
