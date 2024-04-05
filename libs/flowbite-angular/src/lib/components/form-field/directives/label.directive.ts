import * as properties from './label.directive.theme';
import { BaseInputDirective } from './base-input.directive';
import { FlowbiteBoolean } from '../../../common/flowbite.theme';
import {
  FormFieldFloatingLabelTypes,
  FormFieldValidations,
} from '../form-field.theme';

import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'label[flowbiteLabel]',
})
export class LabelDirective extends BaseInputDirective {
  _parentId = '';
  _disabled: keyof FlowbiteBoolean = 'disabled';
  _validate?: keyof FormFieldValidations;
  _floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  @Input() customStyle: Partial<properties.LabelDirectiveBaseTheme> = {};

  @HostBinding('attr.for') get for() {
    return this._parentId;
  }

  @Input() set parentId(id: string) {
    this._parentId = id;
  }
  @Input() set validate(validate: keyof FormFieldValidations) {
    this._validate = validate;
    this.handleClasses();
  }
  @Input() set floatingLabelType(
    floatingLabelType: keyof FormFieldFloatingLabelTypes,
  ) {
    this._floatingLabelType = floatingLabelType;
    this.handleClasses();
  }

  override handleClasses(): void {
    const propertyClass = properties.getClasses({
      disabled: this._disabled,
      validate: this._validate,
      floatingLabelType: this._floatingLabelType,
      customStyle: this.customStyle,
    });

    this._class = propertyClass.root;
  }
}
