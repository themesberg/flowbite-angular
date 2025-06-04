import type {
  FlowbitePaginationButtonColors,
  FlowbitePaginationButtonSizes,
} from '../pagination-button/theme';
import {
  flowbitePaginationButtonTheme,
  type FlowbitePaginationButtonTheme,
} from '../pagination-button/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbitePaginationButtonConfig {
  /**
   * The default theme of PaginationButton
   */
  baseTheme: FlowbitePaginationButtonTheme;
  /**
   * The default color of button.
   */
  color: keyof FlowbitePaginationButtonColors;
  /**
   * The default size of button.
   */
  size: keyof FlowbitePaginationButtonSizes;
  /**
   * Whether the button is outline.
   */
  outline: boolean;
  /**
   * The custom theme of PaginationButton
   */
  customTheme: DeepPartial<FlowbitePaginationButtonTheme>;
}

export const defaultFlowbitePaginationButtonConfig: FlowbitePaginationButtonConfig = {
  baseTheme: flowbitePaginationButtonTheme,
  color: 'default',
  size: 'md',
  outline: false,
  customTheme: {},
};

export const FlowbitePaginationButtonConfigToken =
  new InjectionToken<FlowbitePaginationButtonConfig>('FlowbitePaginationButtonConfigToken');

/**
 * Provide the default PaginationButton configuration
 * @param config The PaginationButton configuration
 * @returns The provider
 */
export const provideFlowbitePaginationButtonConfig = (
  config: Partial<FlowbitePaginationButtonConfig>
): Provider[] => [
  {
    provide: FlowbitePaginationButtonConfigToken,
    useValue: { ...defaultFlowbitePaginationButtonConfig, ...config },
  },
];

/**
 * Inject the PaginationButton configuration
 * @see {@link defaultFlowbitePaginationButtonConfig}
 * @returns The configuration
 */
export const injectFlowbitePaginationButtonConfig = (): FlowbitePaginationButtonConfig =>
  inject(FlowbitePaginationButtonConfigToken, { optional: true }) ??
  defaultFlowbitePaginationButtonConfig;
