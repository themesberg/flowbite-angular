import { Directive, Input } from '@angular/core';
import { BaseInputDirective } from './base-input.directive';
import { HintProperties, InputValidation } from '../form-field.properties';

@Directive({
  selector: '[flowbiteHelper]',
})
export class HelperDirective extends BaseInputDirective {
  _validation: InputValidation | null = null;

  @Input() set validation(validation: InputValidation | null) {
    this._validation = validation;
    this.handleClasses();
  }

  override handleClasses(): void {
    this._classes = [
      ...(this._validation
        ? HintProperties.validation[this._validation]
        : HintProperties.base),
    ];
  }
}
