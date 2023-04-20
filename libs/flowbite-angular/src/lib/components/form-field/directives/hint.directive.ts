import { Directive } from '@angular/core';
import { BaseInputDirective } from './base-input.directive';
import { HintProperties } from '../form-field.properties';

@Directive({
  selector: '[flowbiteHint]',
})
export class HintDirective extends BaseInputDirective {
  override handleClasses(): void {
    this._classes = [
      ...(this._validation
        ? HintProperties.validation[this._validation]
        : HintProperties.base),
    ];
  }
}
