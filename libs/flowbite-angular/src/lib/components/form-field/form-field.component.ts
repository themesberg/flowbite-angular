import type { DeepPartial } from '../../common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import type * as properties from './form-field.theme';
import { FormFieldThemeService } from './form-field.theme.service';

import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, inject, model } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, AsyncPipe, NgTemplateOutlet],
  selector: 'flowbite-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent extends BaseComponent<properties.FormFieldClass> implements OnInit {
  public readonly themeService = inject(FormFieldThemeService);

  //#region properties
  public type = model<keyof properties.FormFieldTypes>('text');
  public size = model<keyof properties.FormFieldSizes>('md');
  public isDisabled = model<boolean>(false);
  public validate = model<keyof properties.FormFieldValidations | undefined>(undefined);
  public floatingLabelType = model<keyof properties.FormFieldFloatingLabelTypes | undefined>(undefined);
  public prefix = model<keyof properties.FormFieldPrefixes | undefined>(undefined);
  public customStyle = model<DeepPartial<properties.FormFieldBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): properties.FormFieldClass {
    return this.themeService.getClasses({
      type: this.type(),
      floatingLabelType: this.floatingLabelType(),
      size: this.size(),
      disabled: booleanToFlowbiteBoolean(this.isDisabled()),
      validate: this.validate(),
      prefix: this.prefix(),
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
