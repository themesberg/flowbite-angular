import type {
  ButtonClass,
  ButtonColors,
  ButtonDuoToneColors,
  ButtonFill,
  ButtonMonochromeColors,
  ButtonSizes,
  ButtonTheme,
} from './button.theme';
import { ButtonThemeService } from './button.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject, model } from '@angular/core';

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
  host: {
    '[attr.type]': 'button',
  },
})
export class ButtonComponent extends BaseComponent<ButtonClass> {
  public readonly themeService = inject(ButtonThemeService);

  //#region properties
  public color = model<keyof ButtonColors>('primary');
  public size = model<keyof ButtonSizes>('md');
  public isPill = model<boolean>(false);
  public fill = model<keyof ButtonFill>('solid');
  public isDisabled = model<boolean>(false);
  public gradientMonochrome = model<keyof ButtonMonochromeColors | undefined>(undefined);
  public gradientDuoTone = model<keyof ButtonDuoToneColors | undefined>(undefined);
  public customStyle = model<DeepPartial<ButtonTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): ButtonClass {
    return this.themeService.getClasses({
      color: this.color(),
      isDisabled: booleanToFlowbiteBoolean(this.isDisabled()),
      fill: this.fill(),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      size: this.size(),
      gradientMonochrome: this.gradientMonochrome(),
      gradientDuoTone: this.gradientDuoTone(),
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
