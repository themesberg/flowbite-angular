import type { DeepPartial } from '../../common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import * as properties from './button.theme';
import { ButtonThemeService } from './button.theme.service';

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { booleanAttribute, Component, HostBinding, inject, input, signal } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/buttons/
 */
@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-button',
  template: `
    <span
      *ngIf="gradientDuoTone() && fill() === 'outline'; else default"
      [ngClass]="contentClasses().spanClass">
      <ng-container *ngTemplateOutlet="contentOutlet"></ng-container>
    </span>

    <ng-template #default>
      <ng-container *ngTemplateOutlet="contentOutlet"></ng-container>
    </ng-template>

    <ng-template #contentOutlet>
      <ng-content />
    </ng-template>
  `,
})
export class ButtonComponent extends BaseComponent {
  @HostBinding('type') hostTypeValue = 'button';

  protected readonly themeService = inject(ButtonThemeService);

  public override contentClasses = signal<properties.ButtonClass>(properties.ButtonClassInstance);

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
  public gradientMonochrome = input<keyof properties.ButtonMonochromeColors | undefined>(undefined);
  public gradientDuoTone = input<keyof properties.ButtonDuoToneColors | undefined>(undefined);
  public customStyle = input<DeepPartial<properties.ButtonBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass() {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      isDisabled: booleanToFlowbiteBoolean(this.isDisabled()),
      fill: this.fill(),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      size: this.size(),
      gradientMonochrome: this.gradientMonochrome(),
      gradientDuoTone: this.gradientDuoTone(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
