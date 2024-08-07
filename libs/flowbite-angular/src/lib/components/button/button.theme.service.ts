import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { ButtonBaseTheme, ButtonClass, ButtonProperties } from './button.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BUTTON_THEME_TOKEN = new InjectionToken<ButtonBaseTheme>('FLOWBITE_BUTTON_THEME_TOKEN');
export class ButtonThemeService implements FlowbiteThemeService<ButtonProperties> {
  private readonly baseTheme = inject(FLOWBITE_BUTTON_THEME_TOKEN);

  public getClasses(properties: ButtonProperties): ButtonClass {
    const theme: ButtonBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ButtonClass = {
      rootClass: twMerge(
        properties.gradientDuoTone && properties.fill == 'outline'
          ? theme.base['span']
          : `${theme.base['default']} ${theme.size[properties.size]}`,
        properties.gradientDuoTone
          ? theme.gradientDuoTone[properties.gradientDuoTone][properties.fill]
          : properties.gradientMonochrome
            ? theme.gradientMonochrome[properties.gradientMonochrome]
            : theme.color[properties.color][properties.fill],
        theme.isPill[properties.isPill],
        theme.isDisabled[properties.isDisabled],
      ),
      spanClass: twMerge(theme.span.base, theme.span.isPill?.[properties.isPill], theme.span.size?.[properties.size]),
    };

    return output;
  }
}
