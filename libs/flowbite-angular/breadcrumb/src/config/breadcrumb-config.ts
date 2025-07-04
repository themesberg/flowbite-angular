import {
  flowbiteBreadcrumbTheme,
  type FlowbiteBreadcrumbColors,
  type FlowbiteBreadcrumbTheme,
} from '../breadcrumb/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteBreadcrumbConfig {
  /**
   * The default theme of breadcrumb
   */
  baseTheme: FlowbiteBreadcrumbTheme;
  /**
   * The default color of breadcrumb
   */
  color: keyof FlowbiteBreadcrumbColors;
  /**
   * Whether the breadcrumb is solid
   */
  solid: boolean;
  /**
   * The custom theme of breadcrumb
   */
  customTheme: DeepPartial<FlowbiteBreadcrumbTheme>;
}

export const defaultFlowbiteBreadcrumbConfig: FlowbiteBreadcrumbConfig = {
  baseTheme: flowbiteBreadcrumbTheme,
  color: 'default',
  solid: false,
  customTheme: {},
};

export const FlowbiteBreadcrumbConfigToken = new InjectionToken<FlowbiteBreadcrumbConfig>(
  'FlowbiteBreadcrumbConfigToken'
);

/**
 * Provide the default Breadcrumb configuration
 * @param config The Breadcrumb configuration
 * @returns The provider
 */
export const provideFlowbiteBreadcrumbConfig = (
  config: Partial<FlowbiteBreadcrumbConfig>
): Provider[] => [
  {
    provide: FlowbiteBreadcrumbConfigToken,
    useValue: { ...defaultFlowbiteBreadcrumbConfig, ...config },
  },
];

/**
 * Inject the Breadcrumb configuration
 * @see {@link defaultFlowbiteBreadcrumbConfig}
 * @returns The configuration
 */
export const injectFlowbiteBreadcrumbConfig = (): FlowbiteBreadcrumbConfig =>
  inject(FlowbiteBreadcrumbConfigToken, { optional: true }) ?? defaultFlowbiteBreadcrumbConfig;
