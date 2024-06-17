import {
  AccordionBaseTheme,
  AccordionClass,
  AccordionProperties,
} from './accordion.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';
import { twMerge } from 'tailwind-merge';

import { InjectionToken, inject } from '@angular/core';

export const FLOWBITE_ACCORDION_THEME_TOKEN =
  new InjectionToken<AccordionBaseTheme>('FLOWBITE_ACCORDION_THEME_TOKEN');

export class AccordionThemeService
  implements FlowbiteThemeService<AccordionProperties>
{
  private baseTheme = inject(FLOWBITE_ACCORDION_THEME_TOKEN);

  public getClasses(properties: AccordionProperties): AccordionClass {
    const theme: AccordionBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: AccordionClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.isFlush?.[properties.isFlush],
      ),
    };

    return output;
  }
}
