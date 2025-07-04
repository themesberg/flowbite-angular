import type {
  FlowbitePaginationPreviousColors,
  FlowbitePaginationPreviousSizes,
} from '../pagination-previous/theme';
import {
  flowbitePaginationPreviousTheme,
  type FlowbitePaginationPreviousTheme,
} from '../pagination-previous/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbitePaginationPreviousConfig {
  /**
   * The default theme of PaginationPrevious
   */
  baseTheme: FlowbitePaginationPreviousTheme;
  /**
   * The default color of button.
   */
  color: keyof FlowbitePaginationPreviousColors;
  /**
   * The default size of button.
   */
  size: keyof FlowbitePaginationPreviousSizes;
  /**
   * Whether the button is outline.
   */
  outline: boolean;
  /**
   * The custom theme of PaginationPrevious
   */
  customTheme: DeepPartial<FlowbitePaginationPreviousTheme>;
}

export const defaultFlowbitePaginationPreviousConfig: FlowbitePaginationPreviousConfig = {
  baseTheme: flowbitePaginationPreviousTheme,
  color: 'default',
  size: 'md',
  outline: false,
  customTheme: {},
};

export const FlowbitePaginationPreviousConfigToken =
  new InjectionToken<FlowbitePaginationPreviousConfig>('FlowbitePaginationPreviousConfigToken');

/**
 * Provide the default PaginationPrevious configuration
 * @param config The PaginationPrevious configuration
 * @returns The provider
 */
export const provideFlowbitePaginationPreviousConfig = (
  config: Partial<FlowbitePaginationPreviousConfig>
): Provider[] => [
  {
    provide: FlowbitePaginationPreviousConfigToken,
    useValue: { ...defaultFlowbitePaginationPreviousConfig, ...config },
  },
];

/**
 * Inject the PaginationPrevious configuration
 * @see {@link defaultFlowbitePaginationPreviousConfig}
 * @returns The configuration
 */
export const injectFlowbitePaginationPreviousConfig = (): FlowbitePaginationPreviousConfig =>
  inject(FlowbitePaginationPreviousConfigToken, { optional: true }) ??
  defaultFlowbitePaginationPreviousConfig;
