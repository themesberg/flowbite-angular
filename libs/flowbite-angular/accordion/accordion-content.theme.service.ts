import type {
  AccordionContentClass,
  AccordionContentProperties,
  AccordionContentTheme,
} from './accordion-content.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `AccordionContentTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN = new InjectionToken<AccordionContentTheme>(
  'FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class AccordionContentThemeService
  implements FlowbiteThemeService<AccordionContentProperties>
{
  private readonly baseTheme = inject(FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN);

  public getClasses(properties: AccordionContentProperties): AccordionContentClass {
    const theme: AccordionContentTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: AccordionContentClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color[properties.color],
        theme.root.isOpen[properties.isOpen],
        theme.root.isFlush[properties.isFlush]
      ),
    };

    return output;
  }
}
