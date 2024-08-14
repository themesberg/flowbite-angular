import type { DeepPartial } from '../../common';
import { FormFieldStateService } from '../../services/state/form-field.state';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import * as properties from './form-field.theme';
import { FormFieldThemeService } from './form-field.theme.service';

import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, AsyncPipe, NgTemplateOutlet],
  selector: 'flowbite-form-field',
  templateUrl: './form-field.component.html',
  providers: [
    {
      provide: FormFieldStateService,
      useFactory: () => {
        const service = inject(FormFieldStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new FormFieldStateService();
      },
    },
  ],
})
export class FormFieldComponent extends BaseComponent implements OnInit {
  public readonly themeService = inject(FormFieldThemeService);
  public readonly stateService = inject(FormFieldStateService);

  public override contentClasses = signal<properties.FormFieldClass>(properties.FormFieldClassInstance);

  //#region properties
  public type = input<keyof properties.FormFieldTypes>('text');
  public size = input<keyof properties.FormFieldSizes>('md');
  public isDisabled = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public validate = input<keyof properties.FormFieldValidations | undefined>(undefined);
  public floatingLabelType = input<keyof properties.FormFieldFloatingLabelTypes | undefined>(undefined);
  public prefix = input<keyof properties.FormFieldPrefixes | undefined>(undefined);
  public customStyle = input<DeepPartial<properties.FormFieldBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
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

  public override init(): void {
    this.stateService.setState({
      type: this.type(),
      floatingLabelType: this.floatingLabelType(),
      size: this.size(),
      isDisabled: this.isDisabled(),
      validate: this.validate(),
    });
  }
  //#endregion
}
