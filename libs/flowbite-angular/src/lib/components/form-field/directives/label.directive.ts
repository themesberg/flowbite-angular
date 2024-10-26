import type { DeepPartial } from '../../../common';
import { booleanToFlowbiteBoolean } from '../../../utils/boolean.util';
import { FormFieldComponent } from '../form-field.component';
import { BaseInputDirective } from './base-input.directive';
import * as properties from './label.directive.theme';
import { LabelDirectiveThemeService } from './label.directive.theme.service';

import { Directive, inject, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'label[flowbiteLabel]',
  host: {
    '[attr.for]': 'for.flowbiteId()',
  },
})
export class LabelDirective extends BaseInputDirective {
  protected override contentClasses = signal<properties.LabelDirectiveClass>(
    properties.labelDirectiveClassInstance
  );

  protected readonly themeService = inject(LabelDirectiveThemeService);
  protected readonly for = inject(FormFieldComponent);

  //#region properties
  public customStyle = input<DeepPartial<properties.LabelDirectiveBaseTheme>>({});
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      disabled: booleanToFlowbiteBoolean(this.formFieldComponent.isDisabled()),
      validate: this.formFieldComponent.validate(),
      floatingLabelType: this.formFieldComponent.floatingLabelType(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
