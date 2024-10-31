import type { DropdownHeaderClass, DropdownHeaderTheme } from './dropdown-header.theme';
import { DropdownHeaderThemeService } from './dropdown-header.theme.service';
import { DropdownComponent } from './dropdown.component';

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
  selector: 'flowbite-dropdown-header',
  template: `
    <div [ngClass]="contentClasses().root">
      <ng-content />
    </div>
    <div class="my-1 h-px bg-gray-100 dark:bg-gray-600"></div>
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
  public customStyle = model<Partial<DropdownHeaderTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): DropdownHeaderClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
