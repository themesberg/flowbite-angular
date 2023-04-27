import { Directive, Input } from '@angular/core';
import { BaseInputDirective } from './base-input.directive';
import { FloatingLabelType, InputValidation, LabelProperties } from '../form-field.properties';

@Directive({
  selector: 'label[flowbiteLabel]',
})
export class LabelDirective extends BaseInputDirective {
  _validation: InputValidation | null = null;
  _floatingLabelType: FloatingLabelType | null = null;

  @Input() set validation(validation: InputValidation | null) {
    this._validation = validation;
    this.handleClasses();
  }
  @Input() set floatingLabelType(floatingLabelType: FloatingLabelType | null) {
    this._floatingLabelType = floatingLabelType;
    this.handleClasses();
  }

  override handleClasses(): void {
    const classesToAdd = [];
    if (this._floatingLabelType) {
      classesToAdd.push(
        ...LabelProperties.floatingLabel[this._floatingLabelType].base
      );
      if (this._validation) {
        classesToAdd.push(
          ...LabelProperties.floatingLabel[this._floatingLabelType].validation[
            this._validation
          ]
        );
      } else {
        classesToAdd.push(
          ...LabelProperties.floatingLabel[this._floatingLabelType].default
        );
      }
    } else {
      classesToAdd.push(...LabelProperties.default.base);
      if (this._validation) {
        classesToAdd.push(
          ...LabelProperties.default.validation[this._validation]
        );
      } else {
        classesToAdd.push(...LabelProperties.default.default);
      }
    }

    this._classes = classesToAdd;
  }
}
