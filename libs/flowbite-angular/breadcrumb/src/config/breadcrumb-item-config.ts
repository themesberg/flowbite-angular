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

export const provideFlowbiteBreadcrumbItemConfig = (
  config: Partial<FlowbiteBreadcrumbItemConfig>
): Provider[] => [
  {
    provide: FlowbiteBreadcrumbItemConfigToken,
    useValue: { ...defaultFlowbiteBreadcrumbItemConfig, ...config },
  },
];

export const injectFlowbiteBreadcrumbItemConfig = (): FlowbiteBreadcrumbItemConfig =>
  inject(FlowbiteBreadcrumbItemConfigToken, { optional: true }) ??
  defaultFlowbiteBreadcrumbItemConfig;
