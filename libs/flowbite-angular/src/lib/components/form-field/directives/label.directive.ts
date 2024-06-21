import * as properties from './label.directive.theme';

import { BaseInputDirective } from './base-input.directive';
import { FormFieldComponent } from '../form-field.component';
import { LabelDirectiveThemeService } from './label.directive.theme.service';
import { booleanToFlowbiteBoolean } from '../../../utils/boolean.util';

import { Directive, HostBinding, inject, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'label[flowbiteLabel]',
})
export class LabelDirective extends BaseInputDirective {
  @HostBinding('attr.for') get forComponentId() {
    return this.for.flowbiteId();
  }

  protected readonly themeService = inject(LabelDirectiveThemeService);
  protected readonly for = inject(FormFieldComponent);

  protected override contentClasses = signal<properties.LabelDirectiveClass>(
    properties.labelDirectiveClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.LabelDirectiveBaseTheme>>({});
  //#endregion

  //#region BaseInputDirective implementation
  override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      disabled: booleanToFlowbiteBoolean(
        this.stateService.select('isDisabled')(),
      ),
      validate: this.stateService.select('validate')(),
      floatingLabelType: this.stateService.select('floatingLabelType')(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
