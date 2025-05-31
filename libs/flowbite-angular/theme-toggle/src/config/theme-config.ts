import type { FlowbiteTheme } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteThemeConfig {
  /**
   * The default theme of ThemeDirective
   */
  theme: FlowbiteTheme;
  /**
   * The default local storage key of ThemeDirective
   */
  localStorageKey: string;
  /**
   * The default type of ThemeDirective
   */
  type: { type: 'class' } | { type: 'attr'; name: string };
}

export const defaultFlowbiteThemeConfig: FlowbiteThemeConfig = {
  theme: 'light',
  localStorageKey: 'fba-color-theme',
  type: { type: 'class' },
};

export const FlowbiteThemeConfigToken = new InjectionToken<FlowbiteThemeConfig>(
  'FlowbiteThemeConfigToken'
);

/**
 * Provide the default Theme configuration
 * @param config The Theme configuration
 * @returns The provider
 */
export const provideFlowbiteThemeConfig = (config: Partial<FlowbiteThemeConfig>): Provider[] => [
  {
    provide: FlowbiteThemeConfigToken,
    useValue: { ...defaultFlowbiteThemeConfig, ...config },
  },
];

/**
 * Inject the Theme configuration
 * @see {@link defaultFlowbiteThemeConfig}
 * @returns The configuration
 */
export const injectFlowbiteThemeConfig = (): FlowbiteThemeConfig =>
  inject(FlowbiteThemeConfigToken, { optional: true }) ?? defaultFlowbiteThemeConfig;
