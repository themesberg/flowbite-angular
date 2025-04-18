import {
  flowbiteButtonTheme,
  type FlowbiteButtonColors,
  type FlowbiteButtonSizes,
  type FlowbiteButtonTheme,
} from '../button/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteButtonConfig {
  /**
   * The default theme of button.
   */
  baseTheme: FlowbiteButtonTheme;
  /**
   * The default color of button.
   */
  color: keyof FlowbiteButtonColors;
  /**
   * The default size of button.
   */
  size: keyof FlowbiteButtonSizes;
  /**
   * Whether the button is pill.
   */
  pill: boolean;
  /**
   * Whether the button is outline.
   */
  outline: boolean;
  /**
   * The custom theme of button.
   */
  customTheme: DeepPartial<FlowbiteButtonTheme>;
}

export const defaultFlowbiteButtonConfig: FlowbiteButtonConfig = {
  baseTheme: flowbiteButtonTheme,
  color: 'primary',
  size: 'md',
  pill: false,
  outline: false,
  customTheme: {},
};

export const FlowbiteButtonConfigToken = new InjectionToken<FlowbiteButtonConfig>(
  'FlowbiteButtonConfigToken'
);

/**
 * Provide the default Button configuration
 * @param config The Button configuration
 * @returns The provider
 */
export const provideFlowbiteButtonConfig = (config: Partial<FlowbiteButtonConfig>): Provider[] => [
  {
    provide: FlowbiteButtonConfigToken,
    useValue: { ...defaultFlowbiteButtonConfig, ...config },
  },
];

/**
 * Inject the Button configuration
 * @see {@link defaultFlowbiteButtonConfig}
 * @returns The configuration
 */
export const injectFlowbiteButtonConfig = (): FlowbiteButtonConfig =>
  inject(FlowbiteButtonConfigToken, { optional: true }) ?? defaultFlowbiteButtonConfig;
