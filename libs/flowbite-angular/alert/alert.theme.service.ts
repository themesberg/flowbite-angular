import type { AlertClass, AlertProperties, AlertTheme } from './alert.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ALERT_THEME_TOKEN = new InjectionToken<AlertTheme>(
  'FLOWBITE_ALERT_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
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
