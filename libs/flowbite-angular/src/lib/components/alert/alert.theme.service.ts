import type { FlowbiteThemeService } from '../../common/flowbite.theme.service';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { AlertBaseTheme, AlertClass, AlertProperties } from './alert.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ALERT_THEME_TOKEN = new InjectionToken<AlertBaseTheme>('FLOWBITE_ALERT_THEME_TOKEN');

export class AlertThemeService implements FlowbiteThemeService<AlertProperties> {
  private readonly baseTheme = inject(FLOWBITE_ALERT_THEME_TOKEN);

  public getClasses(properties: AlertProperties): AlertClass {
    const theme: AlertBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: AlertClass = {
      rootClass: twMerge(
        theme.base,
        theme.hasBorderAccent[properties.hasBorderAccent],
        theme.color[properties.color],
        theme.hasBorder[properties.hasBorder],
      ),
      closeButtonClass: twMerge(theme.closeButton.base, theme.closeButton.color[properties.color]),
    };

    return output;
  }
}
