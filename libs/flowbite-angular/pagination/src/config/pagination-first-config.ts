import type {
  FlowbitePaginationFirstColors,
  FlowbitePaginationFirstSizes,
} from '../pagination-first/theme';
import {
  flowbitePaginationFirstTheme,
  type FlowbitePaginationFirstTheme,
} from '../pagination-first/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbitePaginationFirstConfig {
  /**
   * The default theme of PaginationFirst
   */
  baseTheme: FlowbitePaginationFirstTheme;
  /**
   * The default color of button.
   */
  color: keyof FlowbitePaginationFirstColors;
  /**
   * The default size of button.
   */
  size: keyof FlowbitePaginationFirstSizes;
  /**
   * Whether the button is outline.
   */
  outline: boolean;
  /**
   * The custom theme of PaginationFirst
   */
  customTheme: DeepPartial<FlowbitePaginationFirstTheme>;
}

export const defaultFlowbitePaginationFirstConfig: FlowbitePaginationFirstConfig = {
  baseTheme: flowbitePaginationFirstTheme,
  color: 'info',
  size: 'md',
  outline: false,
  customTheme: {},
};

export const FlowbitePaginationFirstConfigToken = new InjectionToken<FlowbitePaginationFirstConfig>(
  'FlowbitePaginationFirstConfigToken'
);

/**
 * Provide the default PaginationFirst configuration
 * @param config The PaginationFirst configuration
 * @returns The provider
 */
export const provideFlowbitePaginationFirstConfig = (
  config: Partial<FlowbitePaginationFirstConfig>
): Provider[] => [
  {
    provide: FlowbitePaginationFirstConfigToken,
    useValue: { ...defaultFlowbitePaginationFirstConfig, ...config },
  },
];

/**
 * Inject the PaginationFirst configuration
 * @see {@link defaultFlowbitePaginationFirstConfig}
 * @returns The configuration
 */
export const injectFlowbitePaginationFirstConfig = (): FlowbitePaginationFirstConfig =>
  inject(FlowbitePaginationFirstConfigToken, { optional: true }) ??
  defaultFlowbitePaginationFirstConfig;
