import * as properties from './helper.directive.theme';

import { BaseInputDirective } from './base-input.directive';
import { HelperDirectiveThemeService } from './helper.directive.theme.service';

import { Directive, inject, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[flowbiteHelper]',
})
export class HelperDirective extends BaseInputDirective {
  protected readonly themeService = inject(HelperDirectiveThemeService);

  protected override contentClasses = signal<properties.HelperDirectiveClass>(
    properties.helperDirectiveClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.HelperDirectiveBaseTheme>>({});
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      validate: this.stateService.select('validate')(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
