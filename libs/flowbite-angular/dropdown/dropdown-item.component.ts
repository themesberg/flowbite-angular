import type { DropdownItemClass, DropdownItemTheme } from './dropdown-item.theme';
import { DropdownItemThemeService } from './dropdown-item.theme.service';
import { DropdownComponent } from './dropdown.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/dropdowns/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-item',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownItemComponent extends BaseComponent<DropdownItemClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(DropdownItemThemeService);
  /**
   * The parent `DropdownComponent`
   */
  public readonly dropdownComponent = inject(DropdownComponent);

  //#region properties
  /**
   * Set the custom style for this dropdown item
   */
  public customStyle = model<DeepPartial<DropdownItemTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): DropdownItemClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
