import {
  flowbiteSidebarContentTheme,
  type FlowbiteSidebarContentTheme,
} from '../sidebar-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteSidebarContentConfig {
  /**
   * The default theme of sidebar-content
   */
  baseTheme: FlowbiteSidebarContentTheme;

  /**
   * The custom theme of sidebar-content
   */
  customTheme: DeepPartial<FlowbiteSidebarContentTheme>;
}

export const defaultFlowbiteSidebarContentConfig: FlowbiteSidebarContentConfig = {
  baseTheme: flowbiteSidebarContentTheme,
  customTheme: {},
};

export const FlowbiteSidebarContentConfigToken = new InjectionToken<FlowbiteSidebarContentConfig>(
  'FlowbiteSidebarContentConfigToken'
);

/**
 * Provide the default SidebarContent configuration
 * @param config The SidebarContent configuration
 * @returns The provider
 */
export const provideFlowbiteSidebarContentConfig = (
  config: Partial<FlowbiteSidebarContentConfig>
): Provider[] => [
  {
    provide: FlowbiteSidebarContentConfigToken,
    useValue: { ...defaultFlowbiteSidebarContentConfig, ...config },
  },
];

/**
 * Inject the SidebarContent configuration
 * @see {@link defaultFlowbiteSidebarContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteSidebarContentConfig = (): FlowbiteSidebarContentConfig =>
  inject(FlowbiteSidebarContentConfigToken, { optional: true }) ??
  defaultFlowbiteSidebarContentConfig;
