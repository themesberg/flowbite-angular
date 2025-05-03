import type { FlowbiteDropdownTheme } from '../dropdown/theme';
import { flowbiteDropdownTheme } from '../dropdown/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteDropdownConfig {
  baseTheme: FlowbiteDropdownTheme;
  /**
   * The custom theme of dropdown
   */
  customTheme: DeepPartial<FlowbiteDropdownTheme>;
}

export const defaultFlowbiteDropdownConfig: FlowbiteDropdownConfig = {
  baseTheme: flowbiteDropdownTheme,
  customTheme: {},
};

export const FlowbiteDropdownConfigToken = new InjectionToken<FlowbiteDropdownConfig>(
  'FlowbiteDropdownConfigToken'
);

/**
 * Provide the default Dropdown configuration
 * @param config The Dropdown configuration
 * @returns The provider
 */
export const provideFlowbiteDropdownConfig = (
  config: Partial<FlowbiteDropdownConfig>
): Provider[] => [
  {
    provide: FlowbiteDropdownConfigToken,
    useValue: { ...defaultFlowbiteDropdownConfig, ...config },
  },
];

/**
 * Inject the Dropdown configuration
 * @see {@link defaultFlowbiteDropdownConfig}
 * @returns The configuration
 */
export const injectFlowbiteDropdownConfig = (): FlowbiteDropdownConfig =>
  inject(FlowbiteDropdownConfigToken, { optional: true }) ?? defaultFlowbiteDropdownConfig;
