import { Directive } from '@angular/core';
import { BaseInputDirective } from './base-input.directive';
import { AddonProperties } from '../form-field.properties';

@Directive({
  selector: '[flowbiteAddon]',
})
export class AddonDirective extends BaseInputDirective {
  override handleClasses(): void {
    this._classes = AddonProperties;
  }
}
