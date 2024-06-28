import * as properties from './label.directive.theme';

import { BaseInputDirective } from './base-input.directive';
import { FormFieldComponent } from '../form-field.component';
import { LabelDirectiveThemeService } from './label.directive.theme.service';
import { booleanToFlowbiteBoolean } from '../../../utils/boolean.util';

import { DeepPartial } from '../../../common';
import { Directive, HostBinding, inject, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'label[flowbiteLabel]',
})
export class LabelDirective extends BaseInputDirective {
  @HostBinding('attr.for') get forComponentId() {
    return this.for.flowbiteId();
  }

  protected override contentClasses = signal<properties.LabelDirectiveClass>(
    properties.labelDirectiveClassInstance,
  );

  protected readonly themeService = inject(LabelDirectiveThemeService);
  protected readonly for = inject(FormFieldComponent);

  //#region properties
  public customStyle = input<DeepPartial<properties.LabelDirectiveBaseTheme>>(
    {},
  );
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      disabled: booleanToFlowbiteBoolean(
        this.formFieldStateService.select('isDisabled')(),
      ),
      validate: this.formFieldStateService.select('validate')(),
      floatingLabelType:
        this.formFieldStateService.select('floatingLabelType')(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
