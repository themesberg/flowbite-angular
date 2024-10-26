import type { FlowbiteThemeService } from '../../services/flowbite.theme.service';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { AlertClass, AlertProperties, AlertTheme } from './alert.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ALERT_THEME_TOKEN = new InjectionToken<AlertTheme>(
  'FLOWBITE_ALERT_THEME_TOKEN'
);

export class AlertThemeService implements FlowbiteThemeService<AlertProperties> {
  private readonly baseTheme = inject(FLOWBITE_ALERT_THEME_TOKEN);

  public getClasses(properties: AlertProperties): AlertClass {
    const theme: AlertTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: AlertClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color[properties.color],
        theme.root.hasBorder[properties.hasBorder],
        theme.root.hasBorderAccent[properties.hasBorderAccent]
      ),
      closeButtonClass: twMerge(theme.closeButton.base, theme.closeButton.color[properties.color]),
    };

    return output;
  }
}
