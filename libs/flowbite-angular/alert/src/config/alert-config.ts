import {
  flowbiteAlertTheme,
  type FlowbiteAlertColors,
  type FlowbiteAlertTheme,
} from '../alert/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteAlertConfig {
  /**
   * The default theme of alert
   */
  baseTheme: FlowbiteAlertTheme;
  /**
   * The default color of alert
   */
  color: keyof FlowbiteAlertColors;
  /**
   * Wether the alert has border
   */
  border: boolean;
  /**
   * Wether the alert has border accent
   */
  accent: boolean;
  /**
   * The custom theme of alert
   */
  customTheme: DeepPartial<FlowbiteAlertTheme>;
}

export const defaultFlowbiteAlertConfig: FlowbiteAlertConfig = {
  baseTheme: flowbiteAlertTheme,
  color: 'primary',
  border: false,
  accent: false,
  customTheme: {},
};

export const FlowbiteAlertConfigToken = new InjectionToken<FlowbiteAlertConfig>(
  'FlowbiteAlertConfigToken'
);

export const provideFlowbiteAlertConfig = (config: Partial<FlowbiteAlertConfig>): Provider[] => [
  {
    provide: FlowbiteAlertConfigToken,
    useValue: { ...defaultFlowbiteAlertConfig, ...config },
  },
];

export const injectFlowbiteAlertConfig = (): FlowbiteAlertConfig =>
  inject(FlowbiteAlertConfigToken, { optional: true }) ?? defaultFlowbiteAlertConfig;
