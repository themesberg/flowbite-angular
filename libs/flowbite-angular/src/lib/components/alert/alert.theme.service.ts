import { AlertBaseTheme, AlertClass, AlertProperties } from './alert.theme';
import { FlowbiteThemeService } from '../../common/flowbite.theme.service';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ALERT_THEME_TOKEN = new InjectionToken<AlertBaseTheme>(
  'FLOWBITE_ALERT_THEME_TOKEN',
);

export class AlertThemeService
  implements FlowbiteThemeService<AlertProperties>
{
  private baseTheme = inject(FLOWBITE_ALERT_THEME_TOKEN);

  public getClasses(properties: AlertProperties): AlertClass {
    const theme: AlertBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: AlertClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.border?.[properties.borderAccent],
        theme.root.color?.[properties.color],
        theme.root.rounded?.[properties.rounded],
      ),
      alertButtonClass: twMerge(
        theme.button.base,
        theme.button.color?.[properties.color],
      ),
    };

    return output;
  }
}
