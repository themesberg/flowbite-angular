import type { DropdownHeaderClass, DropdownHeaderTheme } from './dropdown-header.theme';
import { DropdownHeaderThemeService } from './dropdown-header.theme.service';
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

export const FLOWBITE_DROPDOWN_HEADER_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<DropdownHeaderTheme>
>('FLOWBITE_DROPDOWN_HEADER_CUSTOM_STYLE_DEFAULT_VALUE');

export const dropdownHeaderDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_DROPDOWN_HEADER_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/dropdowns/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-header',
  template: `
    <div [ngClass]="contentClasses().root">
      <ng-content />
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownHeaderComponent extends BaseComponent<DropdownHeaderClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(DropdownHeaderThemeService);
  /**
   * The parent `DropdownComponent`
   */
  public readonly dropdownComponent = inject(DropdownComponent);

  //#region properties
  /**
   * Set the custom style for this dropdown header
   */
  public customStyle = model(inject(FLOWBITE_DROPDOWN_HEADER_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): DropdownHeaderClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
