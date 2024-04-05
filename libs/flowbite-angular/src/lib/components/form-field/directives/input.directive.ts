import * as properties from './input.directive.theme';
import { BaseInputDirective } from './base-input.directive';
import { FlowbiteBoolean } from '../../../common/flowbite.theme';
import {
  FormFieldFloatingLabelTypes,
  FormFieldPrefixes,
  FormFieldSizes,
  FormFieldValidations,
} from '../form-field.theme';

import { Directive, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[flowbiteInput]',
})
export class InputDirective extends BaseInputDirective {
  _size: keyof FormFieldSizes = 'md';
  _disabled: keyof FlowbiteBoolean = 'disabled';
  _validation?: keyof FormFieldValidations;
  _floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  _prefixType?: keyof FormFieldPrefixes;
  @Input() customStyle: Partial<properties.InputDirectiveBaseTheme> = {};

  @Input() set disabled(disabled: keyof FlowbiteBoolean) {
    this._disabled = disabled;
    this.handleClasses();
  }

  @Input() set size(size: keyof FormFieldSizes) {
    this._size = size;
    this.handleClasses();
  }

  @Input() set validation(validation: keyof FormFieldValidations | undefined) {
    this._validation = validation;
    this.handleClasses();
  }

  @Input() set floatingLabelType(
    floatingLabelType: keyof FormFieldFloatingLabelTypes | undefined,
  ) {
    this._floatingLabelType = floatingLabelType;
    this.handleClasses();
  }

  @Input() set prefixType(type: keyof FormFieldPrefixes | undefined) {
    this._prefixType = type;
    this.handleClasses();
  }

  override handleClasses(): void {
    this._class = properties.getClasses({
      disabled: this._disabled,
      size: this._size,
      validation: this._validation,
      prefixType: this._prefixType,
      floatingLabelType: this._floatingLabelType,
      customStyle: this.customStyle,
    });
  }
}
