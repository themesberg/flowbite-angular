import { Directive } from '@angular/core';
import { BaseInputDirective } from './base-input.directive';
import { AddonProperties } from '../form-field.properties';
import generateID from '../../../utils/id.generator';

@Directive({
  standalone: true,
  selector: '[flowbiteAddon]',
})
export class AddonDirective extends BaseInputDirective {
  override _id = generateID('flowbite-addon');
  override handleClasses(): void {
    this._classes = AddonProperties;
  }
}
