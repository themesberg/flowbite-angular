import { Directive } from '@angular/core';
import { IconProperties } from '../form-field.properties';
import { BaseInputDirective } from './base-input.directive';
import generateID from '../../../utils/id.generator';

@Directive({
  selector: '[flowbiteIcon]',
})
export class IconDirective extends BaseInputDirective {
  override _id = generateID('flowbite-icon');
  override handleClasses(): void {
    this._classes = IconProperties;
  }
}
