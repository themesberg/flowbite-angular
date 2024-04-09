import * as properties from './helper.directive.theme';
import { BaseInputDirective } from './base-input.directive';
import { FormFieldValidations } from '../form-field.theme';
import generateID from '../../../utils/id.generator';

import { Directive, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[flowbiteHelper]',
})
export class HelperDirective extends BaseInputDirective {
  @Input() customStyle: Partial<properties.HelperDirectiveBaseTheme> = {};
  override _id = generateID('flowbite-helper');
  _validate?: keyof FormFieldValidations;

  @Input() set validate(validate: keyof FormFieldValidations) {
    this._validate = validate;
    this.handleClasses();
  }

  override handleClasses(): void {
    const propertyClass = properties.getClasses({
      validate: this._validate,
      customStyle: this.customStyle,
    });

    this._class = propertyClass.root;
  }
}
