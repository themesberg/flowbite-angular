import {
  AccordionTitleBaseTheme,
  AccordionTitleClass,
  AccordionTitleProperties,
} from './accordion-title.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import { twMerge } from 'tailwind-merge';

import { InjectionToken, inject } from '@angular/core';

export const FLOWBITE_ACCORDION_TITLE_THEME_TOKEN =
  new InjectionToken<AccordionTitleBaseTheme>(
    'FLOWBITE_ACCORDION_TITLE_THEME_TOKEN',
  );

export class AccordionTitleThemeService
  implements FlowbiteThemeService<AccordionTitleProperties>
{
  private readonly baseTheme = inject(FLOWBITE_ACCORDION_TITLE_THEME_TOKEN);

  public getClasses(properties: AccordionTitleProperties): AccordionTitleClass {
    const theme: AccordionTitleBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: AccordionTitleClass = {
      rootClass: twMerge(
        theme.base,
        theme.flushAndOpen[properties.isFlush][properties.isOpen],
      ),
    };

    return output;
  }
}
