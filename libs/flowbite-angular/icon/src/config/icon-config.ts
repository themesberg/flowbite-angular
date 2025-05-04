import type {
  FlowbiteIconColors,
  FlowbiteIconSizes,
  FlowbiteIconStrokeWidths,
} from '../icon/theme';
import { flowbiteIconTheme, type FlowbiteIconTheme } from '../icon/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteIconConfig {
  /**
   * The default theme of icon
   */
  baseTheme: FlowbiteIconTheme;
  /**
   * The default size of icon
   */
  flowbiteSize: keyof FlowbiteIconSizes;
  /**
   * The default color of icon
   */
  flowbiteColor: keyof FlowbiteIconColors;
  /**
   * The default stroke width of icon
   */
  flowbiteStrokeWidth: keyof FlowbiteIconStrokeWidths;
  /**
   * The custom theme of icon
   */
  flowbiteCustomTheme: DeepPartial<FlowbiteIconTheme>;
}

export const defaultFlowbiteIconConfig: FlowbiteIconConfig = {
  baseTheme: flowbiteIconTheme,
  flowbiteSize: 'md',
  flowbiteColor: 'light',
  flowbiteStrokeWidth: 'md',
  flowbiteCustomTheme: {},
};

export const FlowbiteIconConfigToken = new InjectionToken<FlowbiteIconConfig>(
  'FlowbiteIconConfigToken'
);

/**
 * Provide the default Icon configuration
 * @param config The Icon configuration
 * @returns The provider
 */
export const provideFlowbiteIconConfig = (config: Partial<FlowbiteIconConfig>): Provider[] => [
  {
    provide: FlowbiteIconConfigToken,
    useValue: { ...defaultFlowbiteIconConfig, ...config },
  },
];

/**
 * Inject the Icon configuration
 * @see {@link defaultFlowbiteIconConfig}
 * @returns The configuration
 */
export const injectFlowbiteIconConfig = (): FlowbiteIconConfig =>
  inject(FlowbiteIconConfigToken, { optional: true }) ?? defaultFlowbiteIconConfig;
