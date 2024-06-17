import { ButtonBaseTheme, ButtonClass, ButtonProperties } from './button.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BUTTON_THEME_TOKEN = new InjectionToken<ButtonBaseTheme>(
  'FLOWBITE_BUTTON_THEME_TOKEN',
);
export class ButtonThemeService
  implements FlowbiteThemeService<ButtonProperties>
{
  private baseTheme = inject(FLOWBITE_BUTTON_THEME_TOKEN);

  public getClasses(properties: ButtonProperties): ButtonClass {
    const theme: ButtonBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: ButtonClass = {
      rootClass: twMerge(
        properties.gradientDuoTone && properties.outline == 'outline'
          ? theme.root.base?.['span']
          : `${theme.root.base?.['default']} ${theme.root.size?.[properties.size]}`,
        properties.gradientDuoTone
          ? theme.root.gradientDuoTone?.[properties.gradientDuoTone][
              properties.outline
            ]
          : properties.gradientMonochrome
            ? theme.root.gradientMonochrome?.[properties.gradientMonochrome]
            : theme.root.color?.[properties.color][properties.outline],
        theme.root.isPill?.[properties.isPill],
        theme.root.isDisabled?.[properties.isDisabled],
      ),
      spanClass: twMerge(
        theme.span.base,
        theme.span.isPill?.[properties.isPill],
        theme.span.size?.[properties.size],
      ),
    };

    return output;
  }
}
