import * as properties from './icon.directive.theme';
import { BaseInputDirective } from './base-input.directive';
import generateID from '../../../utils/id.generator';

import { Directive, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[flowbiteIcon]',
})
export class IconDirective extends BaseInputDirective {
  @Input() customStyle: Partial<properties.IconDirectiveBaseTheme> = {};
  override _id = generateID('flowbite-icon');

  override handleClasses(): void {
    this._class = properties.getClasses({
      customStyle: this.customStyle,
    });
  }
}
