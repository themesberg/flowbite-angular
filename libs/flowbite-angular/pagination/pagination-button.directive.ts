import type { PaginationButtonClass, PaginationButtonTheme } from './pagination-button.theme';
import { PaginationButtonThemeService } from './pagination-button.theme.service';
import type { PaginationSizes } from './pagination.theme';

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
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(PaginationButtonThemeService);

  /**
   * Whether the page is currently active
   */
  public readonly active = input(false);
  /**
   * Size of the component
   *
   * @default md
   */
  public readonly size = input.required<keyof PaginationSizes>();
  /**
   * Set the custom style for this button
   */
  public customStyle = model(inject(FLOWBITE_PAGINATION_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE));

  //#region BaseComponent implementation
  public override fetchClass(): PaginationButtonClass {
    return this.themeService.getClasses({
      active: booleanToFlowbiteBoolean(this.active()),
      size: this.size(),
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
