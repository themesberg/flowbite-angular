import { Directive, HostBinding, Input } from '@angular/core';
import {
  InputProperties,
  InputSize
} from '../form-field.properties';
import { BaseInputDirective } from './base-input.directive';

@Directive({
  selector: 'input[flowbiteInput]',
})
export class InputDirective extends BaseInputDirective {
  _size: InputSize = 'default';
  _disabled: boolean | string = false;

  @HostBinding('attr.disabled') get isDisabled() {
    return this._disabled || null;
  }

  @Input() set disabled(disabled: boolean | string) {
    this._disabled = disabled;
    this.handleClasses();
  }

  @Input() set size(size: InputSize) {
    this._size = size;
    this.handleClasses();
  }

  override handleClasses(): void {
    const classesToAdd = [];
    if (this._floatingLabelType) {
      // Adding base class
      classesToAdd.push(...InputProperties.floatingLabel[this._floatingLabelType].base);
      if (this._validation) {
        classesToAdd.push(...InputProperties.floatingLabel[this._floatingLabelType].validation[this._validation])
      } else if (this._disabled) {
        classesToAdd.push(...InputProperties.floatingLabel[this._floatingLabelType].disabled);
      } else {
        classesToAdd.push(...InputProperties.floatingLabel[this._floatingLabelType].default)
      }
      if (this._size) {
        classesToAdd.push(...InputProperties.floatingLabel[this._floatingLabelType].size[this._size])
      }
    } else {
      classesToAdd.push(...InputProperties.default.base);
      if (this._validation) {
        classesToAdd.push(...InputProperties.default.validation[this._validation])
      } else if (this._disabled) {
        classesToAdd.push(...InputProperties.default.disabled);
      }
      if (this._size) {
        classesToAdd.push(...InputProperties.default.size[this._size])
      }
    }

    this._classes = classesToAdd;
  }
}
