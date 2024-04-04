import * as properties from './addon.directive.theme';
import { BaseInputDirective } from './base-input.directive';
import generateID from '../../../utils/id.generator';

import { Directive, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[flowbiteAddon]',
})
export class AddonDirective extends BaseInputDirective {
  @Input() customStyle: Partial<properties.AddonDirectiveBaseTheme> = {};

  override _id = generateID('flowbite-addon');

  override handleClasses(): void {
    this._class = properties.getClasses({
      customStyle: this.customStyle,
    });
  }
}
