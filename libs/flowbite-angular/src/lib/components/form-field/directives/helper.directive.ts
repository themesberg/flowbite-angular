import * as properties from './helper.directive.theme';

import { BaseInputDirective } from './base-input.directive';
import { HelperDirectiveThemeService } from './helper.directive.theme.service';

import { Directive, inject, input, signal } from '@angular/core';
import { FormFieldValidations } from '../form-field.theme';

@Directive({
  standalone: true,
  selector: '[flowbiteHelper]',
})
export class HelperDirective extends BaseInputDirective {
  protected themeService = inject(HelperDirectiveThemeService);

  protected override contentClasses = signal<properties.HelperDirectiveClass>(
    properties.helperDirectiveClassInstance,
  );

  //#region properties
  public validate = input<keyof FormFieldValidations | undefined>(undefined);

  public customStyle = input<Partial<properties.HelperDirectiveBaseTheme>>({});
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      validate: this.validate(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
