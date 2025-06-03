import {
  flowbiteBreadcrumbContentTheme,
  type FlowbiteBreadcrumbContentTheme,
} from '../breadcrumb-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteBreadcrumbContentConfig {
  /**
   * The default theme of BreadcrumbContent
   */
  baseTheme: FlowbiteBreadcrumbContentTheme;

  /**
   * The custom theme of BreadcrumbContent
   */
  customTheme: DeepPartial<FlowbiteBreadcrumbContentTheme>;
}

export const defaultFlowbiteBreadcrumbContentConfig: FlowbiteBreadcrumbContentConfig = {
  baseTheme: flowbiteBreadcrumbContentTheme,
  customTheme: {},
};

export const FlowbiteBreadcrumbContentConfigToken =
  new InjectionToken<FlowbiteBreadcrumbContentConfig>('FlowbiteBreadcrumbContentConfigToken');

/**
 * Provide the default BreadcrumbContent configuration
 * @param config The BreadcrumbContent configuration
 * @returns The provider
 */
export const provideFlowbiteBreadcrumbContentConfig = (
  config: Partial<FlowbiteBreadcrumbContentConfig>
): Provider[] => [
  {
    provide: FlowbiteBreadcrumbContentConfigToken,
    useValue: { ...defaultFlowbiteBreadcrumbContentConfig, ...config },
  },
];

/**
 * Inject the BreadcrumbContent configuration
 * @see {@link defaultFlowbiteBreadcrumbContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteBreadcrumbContentConfig = (): FlowbiteBreadcrumbContentConfig =>
  inject(FlowbiteBreadcrumbContentConfigToken, { optional: true }) ??
  defaultFlowbiteBreadcrumbContentConfig;
