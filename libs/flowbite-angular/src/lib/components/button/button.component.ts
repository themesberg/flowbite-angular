import * as properties from './button.theme';

import { BaseComponent } from '../base.component';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import {
  Component,
  HostBinding,
  booleanAttribute,
  input,
  signal,
} from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/buttons/
 */
@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent extends BaseComponent {
  @HostBinding('type') hostTypeValue = 'button';

  protected override contentClasses = signal<properties.ButtonClass>(
    properties.ButtonClassInstance,
  );

  //#region properties
  public color = input<keyof properties.ButtonColors>('info');
  public size = input<keyof properties.ButtonSizes>('md');
  public isPill = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public fill = input<keyof properties.ButtonFill>('solid');
  public isDisabled = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public gradientMonochrome = input<
    keyof properties.ButtonMonochromeColors | undefined
  >(undefined);
  public gradientDuoTone = input<
    keyof properties.ButtonDuoToneColors | undefined
  >(undefined);
  public customStyle = input<Partial<properties.ButtonBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass() {
    const propertyClass = properties.getClasses({
      color: this.color(),
      disabled: booleanToFlowbiteBoolean(this.isDisabled()),
      outline: this.fill(),
      pill: booleanToFlowbiteBoolean(this.isPill()),
      size: this.size(),
      gradientMonochrome: this.gradientMonochrome(),
      gradientDuoTone: this.gradientDuoTone(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
