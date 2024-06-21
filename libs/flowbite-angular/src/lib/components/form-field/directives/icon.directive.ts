import * as properties from './icon.directive.theme';

import { BaseInputDirective } from './base-input.directive';
import { IconDirectiveThemeService } from './icon.directive.theme.service';

import { Directive, inject, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[flowbiteIcon]',
})
export class IconDirective extends BaseInputDirective {
  protected readonly themeService = inject(IconDirectiveThemeService);

  protected override contentClasses = signal<properties.IconDirectiveClass>(
    properties.iconDirectiveClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.IconDirectiveBaseTheme>>({});
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
