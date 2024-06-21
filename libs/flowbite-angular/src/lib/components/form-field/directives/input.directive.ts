import * as properties from './input.directive.theme';

import { BaseInputDirective } from './base-input.directive';
import { InputDirectiveThemeService } from './input.directive.theme.service';
import { booleanToFlowbiteBoolean } from '../../../utils/boolean.util';

import { Directive, HostBinding, inject, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[flowbiteInput]',
})
export class InputDirective extends BaseInputDirective {
  @HostBinding('attr.disabled') get getIsDisabled() {
    return this.stateService.select('isDisabled')() || null;
  }

  protected readonly themeService = inject(InputDirectiveThemeService);

  protected override contentClasses = signal<properties.InputDirectiveClass>(
    properties.inputDirectiveClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.InputDirectiveBaseTheme>>({});
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      disabled: booleanToFlowbiteBoolean(
        this.stateService.select('isDisabled')(),
      ),
      size: this.stateService.select('size')(),
      validate: this.stateService.select('validate')(),
      prefix: this.stateService.select('prefix')(),
      floatingLabelType: this.stateService.select('floatingLabelType')(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
