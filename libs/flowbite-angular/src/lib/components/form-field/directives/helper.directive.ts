import type { DeepPartial, FlowbiteClass } from '../../../common';
import { BaseInputDirective } from './base-input.directive';
import * as properties from './helper.directive.theme';
import { HelperDirectiveThemeService } from './helper.directive.theme.service';

import { Directive, inject, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[flowbiteHelper]',
})
export class HelperDirective extends BaseInputDirective {
  protected override contentClasses = signal<properties.HelperDirectiveClass>(
    properties.helperDirectiveClassInstance
  );

  protected readonly themeService = inject(HelperDirectiveThemeService);

  //#region properties
  public customStyle = input<DeepPartial<properties.HelperDirectiveBaseTheme>>({});
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): FlowbiteClass {
    const propertyClass = this.themeService.getClasses({
      validate: this.formFieldComponent.validate(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);

    return { rootClass: '' };
  }
  //#endregion
}
