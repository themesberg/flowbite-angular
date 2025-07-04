import type { FlowbiteBreadcrumbItemTheme } from '../breadcrumb-item/theme';
import { flowbiteBreadcrumbItemTheme } from '../breadcrumb-item/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteBreadcrumbItemConfig {
  /**
   * The default theme of breadcrumb item
   */
  baseTheme: FlowbiteBreadcrumbItemTheme;
  /**
   * The custom theme of breadcrumb item
   */
  customTheme: DeepPartial<FlowbiteBreadcrumbItemTheme>;
}

export const defaultFlowbiteBreadcrumbItemConfig: FlowbiteBreadcrumbItemConfig = {
  baseTheme: flowbiteBreadcrumbItemTheme,
  customTheme: {},
};

export const FlowbiteBreadcrumbItemConfigToken = new InjectionToken<FlowbiteBreadcrumbItemConfig>(
  'FlowbiteBreadcrumbConfigToken'
);

/**
 * Provide the default Breadcrumb Item configuration
 * @param config The Breadcrumb configuration
 * @returns The provider
 */
export const provideFlowbiteBreadcrumbItemConfig = (
  config: Partial<FlowbiteBreadcrumbItemConfig>
): Provider[] => [
  {
    provide: FlowbiteBreadcrumbItemConfigToken,
    useValue: { ...defaultFlowbiteBreadcrumbItemConfig, ...config },
  },
];

/**
 * Inject the Breadcrumb Item configuration
 * @see {@link defaultFlowbiteBreadcrumbItemConfig}
 * @returns The configuration
 */
export const injectFlowbiteBreadcrumbItemConfig = (): FlowbiteBreadcrumbItemConfig =>
  inject(FlowbiteBreadcrumbItemConfigToken, { optional: true }) ??
  defaultFlowbiteBreadcrumbItemConfig;
