import {
  flowbiteSidebarToggleTheme,
  type FlowbiteSidebarToggleTheme,
} from '../sidebar-toggle/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteSidebarToggleConfig {
  /**
   * The default theme of sidebar-toggle
   */
  baseTheme: FlowbiteSidebarToggleTheme;

  /**
   * The custom theme of sidebar-toggle
   */
  customTheme: DeepPartial<FlowbiteSidebarToggleTheme>;
}

export const defaultFlowbiteSidebarToggleConfig: FlowbiteSidebarToggleConfig = {
  baseTheme: flowbiteSidebarToggleTheme,
  customTheme: {},
};

export const FlowbiteSidebarToggleConfigToken = new InjectionToken<FlowbiteSidebarToggleConfig>(
  'FlowbiteSidebarToggleConfigToken'
);

/**
 * Provide the default SidebarToggle configuration
 * @param config The SidebarToggle configuration
 * @returns The provider
 */
export const provideFlowbiteSidebarToggleConfig = (
  config: Partial<FlowbiteSidebarToggleConfig>
): Provider[] => [
  {
    provide: FlowbiteSidebarToggleConfigToken,
    useValue: { ...defaultFlowbiteSidebarToggleConfig, ...config },
  },
];

/**
 * Inject the SidebarToggle configuration
 * @see {@link defaultFlowbiteSidebarToggleConfig}
 * @returns The configuration
 */
export const injectFlowbiteSidebarToggleConfig = (): FlowbiteSidebarToggleConfig =>
  inject(FlowbiteSidebarToggleConfigToken, { optional: true }) ??
  defaultFlowbiteSidebarToggleConfig;
