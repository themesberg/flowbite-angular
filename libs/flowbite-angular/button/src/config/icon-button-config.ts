import { flowbiteIconButtonTheme, type FlowbiteIconButtonTheme } from '../icon-button/theme';

import type { DeepPartial } from 'flowbite-angular';
import {
  defaultFlowbiteIconConfig,
  type FlowbiteIconSizes,
  type FlowbiteIconStrokeWidths,
  type FlowbiteIconTheme,
} from 'flowbite-angular/icon';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteIconButtonConfig {
  /**
   * The default theme of icon-button
   */
  baseTheme: FlowbiteIconButtonTheme;
  /**
   * The custom iconName of icon-button
   */
  iconName: string;
  /**
   * The custom iconSvg of icon-button
   */
  iconSvg: string | undefined;
  /**
   * The custom iconSize of icon-button
   */
  iconSize: keyof FlowbiteIconSizes;
  /**
   * The custom iconStrokeWidth of icon-button
   */
  iconStrokeWidth: keyof FlowbiteIconStrokeWidths;
  /**
   * The custom iconCustomTheme of icon-button
   */
  iconCustomTheme: DeepPartial<FlowbiteIconTheme>;
  /**
   * The custom theme of icon-button
   */
  customTheme: DeepPartial<FlowbiteIconButtonTheme>;
}

export const defaultFlowbiteIconButtonConfig: FlowbiteIconButtonConfig = {
  baseTheme: flowbiteIconButtonTheme,
  iconName: '',
  iconSvg: undefined,
  iconSize: defaultFlowbiteIconConfig.flowbiteSize,
  iconStrokeWidth: defaultFlowbiteIconConfig.flowbiteStrokeWidth,
  iconCustomTheme: defaultFlowbiteIconConfig.flowbiteCustomTheme,
  customTheme: {},
};

export const FlowbiteIconButtonConfigToken = new InjectionToken<FlowbiteIconButtonConfig>(
  'FlowbiteIconButtonConfigToken'
);

/**
 * Provide the default IconButton configuration
 * @param config The IconButton configuration
 * @returns The provider
 */
export const provideFlowbiteIconButtonConfig = (
  config: Partial<FlowbiteIconButtonConfig>
): Provider[] => [
  {
    provide: FlowbiteIconButtonConfigToken,
    useValue: { ...defaultFlowbiteIconButtonConfig, ...config },
  },
];

/**
 * Inject the IconButton configuration
 * @see {@link defaultFlowbiteIconButtonConfig}
 * @returns The configuration
 */
export const injectFlowbiteIconButtonConfig = (): FlowbiteIconButtonConfig =>
  inject(FlowbiteIconButtonConfigToken, { optional: true }) ?? defaultFlowbiteIconButtonConfig;
