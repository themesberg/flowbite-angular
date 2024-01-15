import { BaseInputDirective } from './base-input.directive';
import { Directive } from '@angular/core';
import { IconProperties } from '../form-field.properties';
import generateID from '../../../utils/id.generator';

@Directive({
  standalone: true,
  selector: '[flowbiteIcon]',
})
export class IconDirective extends BaseInputDirective {
  override _id = generateID('flowbite-icon');
  override handleClasses(): void {
    this._classes = IconProperties;
  }
}
