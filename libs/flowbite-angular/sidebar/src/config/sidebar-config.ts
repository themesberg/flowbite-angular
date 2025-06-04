import type { FlowbiteSidebarColors } from '../sidebar/theme';
import { flowbiteSidebarTheme, type FlowbiteSidebarTheme } from '../sidebar/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteSidebarConfig {
  /**
   * The default theme of sidebar
   */
  baseTheme: FlowbiteSidebarTheme;
  /**
   * Whether the sidebar is open
   */
  open: boolean;
  /**
   * The default color of sidebar
   */
  color: keyof FlowbiteSidebarColors;
  /**
   * The custom theme of sidebar
   */
  customTheme: DeepPartial<FlowbiteSidebarTheme>;
}

export const defaultFlowbiteSidebarConfig: FlowbiteSidebarConfig = {
  baseTheme: flowbiteSidebarTheme,
  open: false,
  color: 'default',
  customTheme: {},
};

export const FlowbiteSidebarConfigToken = new InjectionToken<FlowbiteSidebarConfig>(
  'FlowbiteSidebarConfigToken'
);

/**
 * Provide the default Sidebar configuration
 * @param config The Sidebar configuration
 * @returns The provider
 */
export const provideFlowbiteSidebarConfig = (
  config: Partial<FlowbiteSidebarConfig>
): Provider[] => [
  {
    provide: FlowbiteSidebarConfigToken,
    useValue: { ...defaultFlowbiteSidebarConfig, ...config },
  },
];

/**
 * Inject the Sidebar configuration
 * @see {@link defaultFlowbiteSidebarConfig}
 * @returns The configuration
 */
export const injectFlowbiteSidebarConfig = (): FlowbiteSidebarConfig =>
  inject(FlowbiteSidebarConfigToken, { optional: true }) ?? defaultFlowbiteSidebarConfig;
