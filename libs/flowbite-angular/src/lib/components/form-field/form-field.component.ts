import type { DeepPartial } from '../../common';
import { FormFieldStateService } from '../../services/state/form-field.state';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
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
  protected override contentClasses = signal<properties.FormFieldClass>(properties.FormFieldClassInstance);

  protected readonly themeService = inject(FormFieldThemeService);
  protected readonly formsFieldStateService: FormFieldStateService = inject(FormFieldStateService);

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

  public override ngOnInit(): void {
    this.formsFieldStateService.setState({
      type: this.type(),
      floatingLabelType: this.floatingLabelType(),
      size: this.size(),
      isDisabled: this.isDisabled(),
      validate: this.validate(),
    });

    super.ngOnInit();
  }
}
