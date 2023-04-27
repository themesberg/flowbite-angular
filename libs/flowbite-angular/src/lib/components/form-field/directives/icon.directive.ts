import { Directive } from '@angular/core';
import { IconProperties } from '../form-field.properties';
import { BaseInputDirective } from './base-input.directive';

@Directive({
  selector: '[flowbiteIcon]',
})
export class IconDirective extends BaseInputDirective {
  override handleClasses(): void {
    this._classes = IconProperties;
  }
}
