import type { DropdownDividerClass, DropdownDividerTheme } from './dropdown-divider.theme';
import { DropdownDividerThemeService } from './dropdown-divider.theme.service';
import { DropdownComponent } from './dropdown.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_DROPDOWN_DIVIDER_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<DropdownDividerTheme>
>('FLOWBITE_DROPDOWN_DIVIDER_CUSTOM_STYLE_DEFAULT_VALUE');

export const dropdownDividerDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_DROPDOWN_DIVIDER_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/dropdowns/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-divider',
  template: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownDividerComponent extends BaseComponent<DropdownDividerClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(DropdownDividerThemeService);
  /**
   * The parent `DropdownComponent`
   */
  public readonly dropdownComponent = inject(DropdownComponent);

  //#region properties
  /**
   * Set the custom style for this dropdown divider
   */
  public customStyle = model(inject(FLOWBITE_DROPDOWN_DIVIDER_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): DropdownDividerClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
