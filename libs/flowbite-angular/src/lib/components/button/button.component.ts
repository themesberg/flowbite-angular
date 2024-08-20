import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
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

  public readonly themeService = inject(ButtonThemeService);

  public override contentClasses = signal<ButtonClass>(createClass({ rootClass: '', spanClass: '' }));

  //#region properties
  public color = input<keyof ButtonColors>('primary');
  public size = input<keyof ButtonSizes>('md');
  public isPill = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });
  public fill = input<keyof ButtonFill>('solid');
  public isDisabled = input<boolean, unknown>(false, { transform: booleanAttribute });
  public gradientMonochrome = input<keyof ButtonMonochromeColors | undefined>(undefined);
  public gradientDuoTone = input<keyof ButtonDuoToneColors | undefined>(undefined);
  public customStyle = input<DeepPartial<ButtonTheme>>({});
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
