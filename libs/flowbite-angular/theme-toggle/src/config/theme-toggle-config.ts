import { flowbiteThemeToggleTheme, type FlowbiteThemeToggleTheme } from '../theme-toggle/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteThemeToggleConfig {
  /**
   * The default theme of ThemeToggle
   */
  baseTheme: FlowbiteThemeToggleTheme;

  /**
   * The custom theme of ThemeToggle
   */
  customTheme: DeepPartial<FlowbiteThemeToggleTheme>;
}

export const defaultFlowbiteThemeToggleConfig: FlowbiteThemeToggleConfig = {
  baseTheme: flowbiteThemeToggleTheme,
  customTheme: {},
};

export const FlowbiteThemeToggleConfigToken = new InjectionToken<FlowbiteThemeToggleConfig>(
  'FlowbiteThemeToggleConfigToken'
);

/**
 * Provide the default ThemeToggle configuration
 * @param config The ThemeToggle configuration
 * @returns The provider
 */
export const provideFlowbiteThemeToggleConfig = (
  config: Partial<FlowbiteThemeToggleConfig>
): Provider[] => [
  {
    provide: FlowbiteThemeToggleConfigToken,
    useValue: { ...defaultFlowbiteThemeToggleConfig, ...config },
  },
];

/**
 * Inject the ThemeToggle configuration
 * @see {@link defaultFlowbiteThemeToggleConfig}
 * @returns The configuration
 */
export const injectFlowbiteThemeToggleConfig = (): FlowbiteThemeToggleConfig =>
  inject(FlowbiteThemeToggleConfigToken, { optional: true }) ?? defaultFlowbiteThemeToggleConfig;
