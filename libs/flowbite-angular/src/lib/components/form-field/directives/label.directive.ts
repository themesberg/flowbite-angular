import * as properties from './label.directive.theme';

import { BaseInputDirective } from './base-input.directive';
import {
  FormFieldFloatingLabelTypes,
  FormFieldValidations,
} from '../form-field.theme';
import { LabelDirectiveThemeService } from './label.directive.theme.service';

import {
  Directive,
  HostBinding,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormFieldComponent } from '../form-field.component';
import { booleanToFlowbiteBoolean } from '../../../utils/boolean.util';

@Directive({
  standalone: true,
  selector: 'label[flowbiteLabel]',
})
export class LabelDirective extends BaseInputDirective {
  @HostBinding('attr.for') get forComponentId() {
    return this.for.flowbiteId;
  }

  protected themeService = inject(LabelDirectiveThemeService);
  protected for = inject(FormFieldComponent);

  protected override contentClasses = signal<properties.LabelDirectiveClass>(
    properties.labelDirectiveClassInstance,
  );

  //#region properties
  public validate = input<keyof FormFieldValidations | undefined>(undefined);
  public idDisabled = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public floatingLabelType = input<
    keyof FormFieldFloatingLabelTypes | undefined
  >(undefined);
  public customStyle = input<Partial<properties.LabelDirectiveBaseTheme>>({});
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      disabled: booleanToFlowbiteBoolean(this.idDisabled()),
      validate: this.validate(),
      floatingLabelType: this.floatingLabelType(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
