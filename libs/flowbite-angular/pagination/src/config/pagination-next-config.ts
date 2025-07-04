import type {
  FlowbitePaginationNextColors,
  FlowbitePaginationNextSizes,
} from '../pagination-next/theme';
import {
  flowbitePaginationNextTheme,
  type FlowbitePaginationNextTheme,
} from '../pagination-next/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbitePaginationNextConfig {
  /**
   * The default theme of PaginationNext
   */
  baseTheme: FlowbitePaginationNextTheme;
  /**
   * The default color of button.
   */
  color: keyof FlowbitePaginationNextColors;
  /**
   * The default size of button.
   */
  size: keyof FlowbitePaginationNextSizes;
  /**
   * Whether the button is outline.
   */
  outline: boolean;
  /**
   * The custom theme of PaginationNext
   */
  customTheme: DeepPartial<FlowbitePaginationNextTheme>;
}

export const defaultFlowbitePaginationNextConfig: FlowbitePaginationNextConfig = {
  baseTheme: flowbitePaginationNextTheme,
  color: 'default',
  size: 'md',
  outline: false,
  customTheme: {},
};

export const FlowbitePaginationNextConfigToken = new InjectionToken<FlowbitePaginationNextConfig>(
  'FlowbitePaginationNextConfigToken'
);

/**
 * Provide the default PaginationNext configuration
 * @param config The PaginationNext configuration
 * @returns The provider
 */
export const provideFlowbitePaginationNextConfig = (
  config: Partial<FlowbitePaginationNextConfig>
): Provider[] => [
  {
    provide: FlowbitePaginationNextConfigToken,
    useValue: { ...defaultFlowbitePaginationNextConfig, ...config },
  },
];

/**
 * Inject the PaginationNext configuration
 * @see {@link defaultFlowbitePaginationNextConfig}
 * @returns The configuration
 */
export const injectFlowbitePaginationNextConfig = (): FlowbitePaginationNextConfig =>
  inject(FlowbitePaginationNextConfigToken, { optional: true }) ??
  defaultFlowbitePaginationNextConfig;
