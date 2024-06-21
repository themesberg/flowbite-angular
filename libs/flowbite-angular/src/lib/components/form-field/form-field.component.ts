import * as properties from './form-field.theme';

import { BaseComponent } from '../base.component';
import { FormFieldState } from '../../services/state/form-field.state';
import { FormFieldThemeService } from './form-field.theme.service';
import { SignalStoreService } from '../../services';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  OnInit,
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
  providers: [SignalStoreService<FormFieldState>],
})
export class FormFieldComponent extends BaseComponent implements OnInit {
  protected readonly themeService = inject(FormFieldThemeService);
  protected readonly stateService = inject<SignalStoreService<FormFieldState>>(
    SignalStoreService<FormFieldState>,
  );

  protected override contentClasses = signal<properties.FormFieldClass>(
    properties.FormFieldClassInstance,
  );

  //#region properties
  public type = input<keyof properties.FormFieldTypes>('text');
  public size = input<keyof properties.FormFieldSizes>('md');
  public isDisabled = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public validate = input<keyof properties.FormFieldValidations | undefined>(
    undefined,
  );
  public floatingLabelType = input<
    keyof properties.FormFieldFloatingLabelTypes | undefined
  >(undefined);
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

  public override ngOnInit(): void {
    this.stateService.setState({
      type: this.type(),
      floatingLabelType: this.floatingLabelType(),
      size: this.size(),
      isDisabled: this.isDisabled(),
      validate: this.validate(),
    });

    super.ngOnInit();
  }
}
