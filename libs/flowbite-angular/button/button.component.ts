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
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends BaseComponent<ButtonClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(ButtonThemeService);

  //#region properties
  /**
   * Set the button color
   *
   * @default primary
   */
  public color = model<keyof ButtonColors>('primary');
  /**
   * Set the button size
   *
   * @default md
   */
  public size = model<keyof ButtonSizes>('md');
  /**
   * Set if the button is pill
   *
   * @default false
   */
  public isPill = model<boolean>(false);
  /**
   * Set the button fill
   *
   * @default solid
   */
  public fill = model<keyof ButtonFill>('solid');
  /**
   * Set if the button is disabled
   *
   * @default false
   */
  public isDisabled = model<boolean>(false);
  /**
   * Set the button gradient monochrome
   *
   * @default undefined
   */
  public gradientMonochrome = model<keyof ButtonMonochromeColors | undefined>(undefined);
  /**
   * Set the button gradient duotone
   *
   * @default undefined
   */
  public gradientDuoTone = model<keyof ButtonDuoToneColors | undefined>(undefined);
  /**
   * Set the custom style for this button
   */
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
