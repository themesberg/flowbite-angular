import * as properties from './addon.directive.theme';

import { AddonDirectiveThemeService } from './addon.directive.theme.service';
import { BaseInputDirective } from './base-input.directive';

import { Directive, inject, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[flowbiteAddon]',
})
export class AddonDirective extends BaseInputDirective {
  protected readonly themeService = inject(AddonDirectiveThemeService);

  protected override contentClasses = signal<properties.AddonDirectiveClass>(
    properties.addonDirectiveClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.AddonDirectiveBaseTheme>>({});
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
