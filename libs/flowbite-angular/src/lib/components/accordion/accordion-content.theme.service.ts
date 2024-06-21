import {
  AccordionContentBaseTheme,
  AccordionContentClass,
  AccordionContentProperties,
} from './accordion-content.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN =
  new InjectionToken<AccordionContentBaseTheme>(
    'FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN',
  );

export class AccordionContentThemeService
  implements FlowbiteThemeService<AccordionContentProperties>
{
  private readonly baseTheme = inject(FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN);

  public getClasses(
    properties: AccordionContentProperties,
  ): AccordionContentClass {
    const theme: AccordionContentBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: AccordionContentClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
