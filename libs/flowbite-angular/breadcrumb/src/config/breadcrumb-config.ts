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
   * The custom theme of breadcrumb
   */
  customTheme: DeepPartial<FlowbiteBreadcrumbTheme>;
}

export const defaultFlowbiteBreadcrumbConfig: FlowbiteBreadcrumbConfig = {
  baseTheme: flowbiteBreadcrumbTheme,
  color: 'primary',
  customTheme: {},
};

export const FlowbiteBreadcrumbConfigToken = new InjectionToken<FlowbiteBreadcrumbConfig>(
  'FlowbiteBreadcrumbConfigToken'
);

export const provideFlowbiteBreadcrumbConfig = (
  config: Partial<FlowbiteBreadcrumbConfig>
): Provider[] => [
  {
    provide: FlowbiteBreadcrumbConfigToken,
    useValue: { ...defaultFlowbiteBreadcrumbConfig, ...config },
  },
];

export const injectFlowbiteBreadcrumbConfig = (): FlowbiteBreadcrumbConfig =>
  inject(FlowbiteBreadcrumbConfigToken, { optional: true }) ?? defaultFlowbiteBreadcrumbConfig;
