import * as properties from './form-field.theme';

import { BaseComponent } from '../base.component';
import { FormFieldThemeService } from './form-field.theme.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, AsyncPipe, NgTemplateOutlet],
  selector: 'flowbite-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent extends BaseComponent {
  protected themeService = inject(FormFieldThemeService);

  protected override contentClasses = signal<properties.FormFieldClass>(
    properties.FormFieldClassInstance,
  );

  //#region properties
  public type = input<keyof properties.FormFieldTypes>('text');
  public floatingLabelType = input<
    keyof properties.FormFieldFloatingLabelTypes | undefined
  >(undefined);
  public size = input<keyof properties.FormFieldSizes>('md');
  public isDisabled = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public validate = input<keyof properties.FormFieldValidations | undefined>(
    undefined,
  );
  public prefix = input<keyof properties.FormFieldPrefixes | undefined>(
    undefined,
  );
  public customStyle = input<Partial<properties.FormFieldBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      type: this.type(),
      floatingLabelType: this.floatingLabelType(),
      size: this.size(),
      disabled: booleanToFlowbiteBoolean(this.isDisabled()),
      validate: this.validate(),
      prefix: this.prefix(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
