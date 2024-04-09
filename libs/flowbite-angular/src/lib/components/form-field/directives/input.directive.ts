import * as properties from './input.directive.theme';
import { BaseInputDirective } from './base-input.directive';
import { FlowbiteBoolean } from '../../../common/flowbite.theme';
import {
  FormFieldFloatingLabelTypes,
  FormFieldPrefixes,
  FormFieldSizes,
  FormFieldValidations,
} from '../form-field.theme';

import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[flowbiteInput]',
})
export class InputDirective extends BaseInputDirective {
  _size: keyof FormFieldSizes = 'md';
  _disabled: keyof FlowbiteBoolean = 'disabled';
  _validate?: keyof FormFieldValidations;
  _floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  _prefix?: keyof FormFieldPrefixes;
  @Input() customStyle: Partial<properties.InputDirectiveBaseTheme> = {};

  @HostBinding('attr.disabled') get isDisabled() {
    return this._disabled == 'enabled' || null;
  }

  @Input() set disabled(disabled: keyof FlowbiteBoolean) {
    this._disabled = disabled;
    this.handleClasses();
  }

  @Input() set size(size: keyof FormFieldSizes) {
    this._size = size;
    this.handleClasses();
  }

  @Input() set validate(validate: keyof FormFieldValidations | undefined) {
    this._validate = validate;
    this.handleClasses();
  }

  @Input() set floatingLabelType(
    floatingLabelType: keyof FormFieldFloatingLabelTypes | undefined,
  ) {
    this._floatingLabelType = floatingLabelType;
    this.handleClasses();
  }

  @Input() set prefix(prefix: keyof FormFieldPrefixes | undefined) {
    this._prefix = prefix;
    this.handleClasses();
  }

  override handleClasses(): void {
    const propertyClass = properties.getClasses({
      disabled: this._disabled,
      size: this._size,
      validate: this._validate,
      prefix: this._prefix,
      floatingLabelType: this._floatingLabelType,
      customStyle: this.customStyle,
    });

    this._class = propertyClass.root;
  }
}
