import type { FlowbiteTabColors, FlowbiteTabSizes } from '../tab/theme';
import { flowbiteTabTheme, type FlowbiteTabTheme } from '../tab/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteTabConfig {
  /**
   * The default theme of Tab
   */
  baseTheme: FlowbiteTabTheme;
  /**
   * The default size of Tab
   */
  size: keyof FlowbiteTabSizes;
  /**
   * The default color of Tab
   */
  color: keyof FlowbiteTabColors;
  /**
   * The custom theme of Tab
   */
  customTheme: DeepPartial<FlowbiteTabTheme>;
}

export const defaultFlowbiteTabConfig: FlowbiteTabConfig = {
  baseTheme: flowbiteTabTheme,
  size: 'md',
  color: 'default',
  customTheme: {},
};

export const FlowbiteTabConfigToken = new InjectionToken<FlowbiteTabConfig>(
  'FlowbiteTabConfigToken'
);

/**
 * Provide the default Tab configuration
 * @param config The Tab configuration
 * @returns The provider
 */
export const provideFlowbiteTabConfig = (config: Partial<FlowbiteTabConfig>): Provider[] => [
  {
    provide: FlowbiteTabConfigToken,
    useValue: { ...defaultFlowbiteTabConfig, ...config },
  },
];

/**
 * Inject the Tab configuration
 * @see {@link defaultFlowbiteTabConfig}
 * @returns The configuration
 */
export const injectFlowbiteTabConfig = (): FlowbiteTabConfig =>
  inject(FlowbiteTabConfigToken, { optional: true }) ?? defaultFlowbiteTabConfig;
