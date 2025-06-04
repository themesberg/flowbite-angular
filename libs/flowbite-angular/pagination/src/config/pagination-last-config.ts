import type {
  FlowbitePaginationLastColors,
  FlowbitePaginationLastSizes,
} from '../pagination-last/theme';
import {
  flowbitePaginationLastTheme,
  type FlowbitePaginationLastTheme,
} from '../pagination-last/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbitePaginationLastConfig {
  /**
   * The default theme of PaginationLast
   */
  baseTheme: FlowbitePaginationLastTheme;
  /**
   * The default color of button.
   */
  color: keyof FlowbitePaginationLastColors;
  /**
   * The default size of button.
   */
  size: keyof FlowbitePaginationLastSizes;
  /**
   * Whether the button is outline.
   */
  outline: boolean;
  /**
   * The custom theme of PaginationLast
   */
  customTheme: DeepPartial<FlowbitePaginationLastTheme>;
}

export const defaultFlowbitePaginationLastConfig: FlowbitePaginationLastConfig = {
  baseTheme: flowbitePaginationLastTheme,
  color: 'default',
  size: 'md',
  outline: false,
  customTheme: {},
};

export const FlowbitePaginationLastConfigToken = new InjectionToken<FlowbitePaginationLastConfig>(
  'FlowbitePaginationLastConfigToken'
);

/**
 * Provide the default PaginationLast configuration
 * @param config The PaginationLast configuration
 * @returns The provider
 */
export const provideFlowbitePaginationLastConfig = (
  config: Partial<FlowbitePaginationLastConfig>
): Provider[] => [
  {
    provide: FlowbitePaginationLastConfigToken,
    useValue: { ...defaultFlowbitePaginationLastConfig, ...config },
  },
];

/**
 * Inject the PaginationLast configuration
 * @see {@link defaultFlowbitePaginationLastConfig}
 * @returns The configuration
 */
export const injectFlowbitePaginationLastConfig = (): FlowbitePaginationLastConfig =>
  inject(FlowbitePaginationLastConfigToken, { optional: true }) ??
  defaultFlowbitePaginationLastConfig;
