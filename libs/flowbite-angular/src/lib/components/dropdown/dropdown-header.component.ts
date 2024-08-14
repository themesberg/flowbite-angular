import { createClass } from '../../utils';
import { BaseComponent } from '../base.component';
import type { DropdownHeaderClass, DropdownHeaderTheme } from './dropdown-header.theme';
import { DropdownHeaderThemeService } from './dropdown-header.theme.service';
import { DropdownComponent } from './dropdown.component';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

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
})
export class DropdownHeaderComponent extends BaseComponent {
  public readonly themeService = inject(DropdownHeaderThemeService);
  public readonly dropdownComponent = inject(DropdownComponent);

  public override contentClasses = signal<DropdownHeaderClass>(createClass({ root: '', rootClass: '' }));

  //#region properties
  public customStyle = input<Partial<DropdownHeaderTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
