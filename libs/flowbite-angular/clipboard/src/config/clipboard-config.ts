import { flowbiteClipboardTheme, type FlowbiteClipboardTheme } from '../clipboard/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteClipboardConfig {
  /**
   * The default theme of clipboard
   */
  baseTheme: FlowbiteClipboardTheme;

  /**
   * The custom theme of clipboard
   */
  customTheme: DeepPartial<FlowbiteClipboardTheme>;
}

export const defaultFlowbiteClipboardConfig: FlowbiteClipboardConfig = {
  baseTheme: flowbiteClipboardTheme,
  customTheme: {},
};

export const FlowbiteClipboardConfigToken = new InjectionToken<FlowbiteClipboardConfig>(
  'FlowbiteClipboardConfigToken'
);

/**
 * Provide the default Clipboard configuration
 * @param config The Clipboard configuration
 * @returns The provider
 */
export const provideFlowbiteClipboardConfig = (
  config: Partial<FlowbiteClipboardConfig>
): Provider[] => [
  {
    provide: FlowbiteClipboardConfigToken,
    useValue: { ...defaultFlowbiteClipboardConfig, ...config },
  },
];

/**
 * Inject the Clipboard configuration
 * @see {@link defaultFlowbiteClipboardConfig}
 * @returns The configuration
 */
export const injectFlowbiteClipboardConfig = (): FlowbiteClipboardConfig =>
  inject(FlowbiteClipboardConfigToken, { optional: true }) ?? defaultFlowbiteClipboardConfig;
