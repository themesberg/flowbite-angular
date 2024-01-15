import { Directive, Input } from '@angular/core';
import { BaseInputDirective } from './base-input.directive';
import { HintProperties, InputValidation } from '../form-field.properties';
import generateID from '../../../utils/id.generator';

@Directive({
  standalone: true,
  selector: '[flowbiteHelper]',
})
export class HelperDirective extends BaseInputDirective {
  override _id = generateID('flowbite-helper');
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
