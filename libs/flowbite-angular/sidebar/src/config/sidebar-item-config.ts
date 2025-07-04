import { flowbiteSidebarItemTheme, type FlowbiteSidebarItemTheme } from '../sidebar-item/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteSidebarItemConfig {
  /**
   * The default theme of sidebar-item
   */
  baseTheme: FlowbiteSidebarItemTheme;

  /**
   * The custom theme of sidebar-item
   */
  customTheme: DeepPartial<FlowbiteSidebarItemTheme>;
}

export const defaultFlowbiteSidebarItemConfig: FlowbiteSidebarItemConfig = {
  baseTheme: flowbiteSidebarItemTheme,
  customTheme: {},
};

export const FlowbiteSidebarItemConfigToken = new InjectionToken<FlowbiteSidebarItemConfig>(
  'FlowbiteSidebarItemConfigToken'
);

/**
 * Provide the default SidebarItem configuration
 * @param config The SidebarItem configuration
 * @returns The provider
 */
export const provideFlowbiteSidebarItemConfig = (
  config: Partial<FlowbiteSidebarItemConfig>
): Provider[] => [
  {
    provide: FlowbiteSidebarItemConfigToken,
    useValue: { ...defaultFlowbiteSidebarItemConfig, ...config },
  },
];

/**
 * Inject the SidebarItem configuration
 * @see {@link defaultFlowbiteSidebarItemConfig}
 * @returns The configuration
 */
export const injectFlowbiteSidebarItemConfig = (): FlowbiteSidebarItemConfig =>
  inject(FlowbiteSidebarItemConfigToken, { optional: true }) ?? defaultFlowbiteSidebarItemConfig;
