import {
  DropdownBaseTheme,
  DropdownClass,
  DropdownProperties,
} from './dropdown.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DROPDOWN_THEME_TOKEN =
  new InjectionToken<DropdownBaseTheme>('FLOWBITE_DROPDOWN_THEME_TOKEN');

export class DropdownThemeService
  implements FlowbiteThemeService<DropdownProperties>
{
  private baseTheme = inject(FLOWBITE_DROPDOWN_THEME_TOKEN);

  public getClasses(properties: DropdownProperties): DropdownClass {
    const theme: DropdownBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: DropdownClass = {
      rootClass: '',
      dropdownClass: twMerge(theme.root.base),
      spanClass: twMerge(theme.span.base),
      containerClass: twMerge(
        theme.container.base,
        theme.container.isOpen?.[properties.isOpen],
        theme.container.placement?.[properties.placement],
      ),
      contentClass: twMerge(theme.content.base),
      subContentClass: twMerge(theme.subContent.base),
    };

    return output;
  }
}
