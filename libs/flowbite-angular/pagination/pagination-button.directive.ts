import type { PaginationButtonClass, PaginationButtonTheme } from './pagination-button.theme';
import { PaginationButtonThemeService } from './pagination-button.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import {
  Directive,
  inject,
  InjectionToken,
  input,
  makeEnvironmentProviders,
  model,
} from '@angular/core';

export const FLOWBITE_PAGINATION_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<PaginationButtonTheme>
>('FLOWBITE_PAGINATION_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE');

export const paginationButtonDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_PAGINATION_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

@Directive({
  standalone: true,
  selector: 'button[flowbitePaginationButton]',
})
export class PaginationButtonDirective extends BaseComponent<PaginationButtonClass> {
  public readonly themeService = inject(PaginationButtonThemeService);

  public readonly active = input(false);

  public customStyle = model(inject(FLOWBITE_PAGINATION_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE));

  public override fetchClass(): PaginationButtonClass {
    return this.themeService.getClasses({
      active: booleanToFlowbiteBoolean(this.active()),
      customStyle: this.customStyle(),
    });
  }
}
