import * as properties from './input.directive.theme';

import { BaseInputDirective } from './base-input.directive';
import {
  FormFieldFloatingLabelTypes,
  FormFieldPrefixes,
  FormFieldSizes,
  FormFieldValidations,
} from '../form-field.theme';
import { InputDirectiveThemeService } from './input.directive.theme.service';
import { booleanToFlowbiteBoolean } from '../../../utils/boolean.util';

import {
  Directive,
  HostBinding,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[flowbiteInput]',
})
export class InputDirective extends BaseInputDirective {
  @HostBinding('attr.disabled') get getIsDisabled() {
    return this.isDisabled() || null;
  }

  protected themeService = inject(InputDirectiveThemeService);

  protected override contentClasses = signal<properties.InputDirectiveClass>(
    properties.inputDirectiveClassInstance,
  );

  //#region properties
  public size = input<keyof FormFieldSizes>('md');
  public isDisabled = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public validate = input<keyof FormFieldValidations | undefined>(undefined);
  public floatingLabelType = input<
    keyof FormFieldFloatingLabelTypes | undefined
  >(undefined);
  public prefix = input<keyof FormFieldPrefixes | undefined>(undefined);
  public customStyle = input<Partial<properties.InputDirectiveBaseTheme>>({});
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      disabled: booleanToFlowbiteBoolean(this.isDisabled()),
      size: this.size(),
      validate: this.validate(),
      prefix: this.prefix(),
      floatingLabelType: this.floatingLabelType(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
