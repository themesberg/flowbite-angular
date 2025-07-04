import type { FlowbiteDropdownItemTheme } from '../dropdown-item/theme';
import { flowbiteDropdownItemTheme } from '../dropdown-item/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteDropdownItemConfig {
  baseTheme: FlowbiteDropdownItemTheme;
  /**
   * The custom theme of dropdown item
   */
  customTheme: DeepPartial<FlowbiteDropdownItemTheme>;
}

export const defaultFlowbiteDropdownItemConfig: FlowbiteDropdownItemConfig = {
  baseTheme: flowbiteDropdownItemTheme,
  customTheme: {},
};

export const FlowbiteDropdownItemConfigToken = new InjectionToken<FlowbiteDropdownItemConfig>(
  'FlowbiteDropdownItemConfigToken'
);

/**
 * Provide the default Dropdown Item configuration
 * @param config The Dropdown Item configuration
 * @returns The provider
 */
export const provideFlowbiteDropdownItemConfig = (
  config: Partial<FlowbiteDropdownItemConfig>
): Provider[] => [
  {
    provide: FlowbiteDropdownItemConfigToken,
    useValue: { ...defaultFlowbiteDropdownItemConfig, ...config },
  },
];

/**
 * Inject the Dropdown Item configuration
 * @see {@link defaultFlowbiteDropdownItemConfig}
 * @returns The configuration
 */
export const injectFlowbiteDropdownItemConfig = (): FlowbiteDropdownItemConfig =>
  inject(FlowbiteDropdownItemConfigToken, { optional: true }) ?? defaultFlowbiteDropdownItemConfig;
