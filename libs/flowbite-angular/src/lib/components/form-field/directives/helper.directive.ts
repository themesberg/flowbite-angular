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
  _validation?: keyof FormFieldValidations;

  @Input() set validation(validation: keyof FormFieldValidations) {
    this._validation = validation;
    this.handleClasses();
  }

  override handleClasses(): void {
    this._class = properties.getClasses({
      validation: this._validation,
      customStyle: this.customStyle,
    });
  }
}
