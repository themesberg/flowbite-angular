import * as properties from './indicators.theme';
import { BaseComponent } from '../base.component';
import { IndicatorThemeService } from './indicators.theme.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import {
  Component,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/indicators/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-indicator',
  templateUrl: './indicators.component.html',
})
export class IndicatorComponent extends BaseComponent {
  protected readonly themeService = inject(IndicatorThemeService);

  protected override contentClasses = signal<properties.indicatorClass>(
    properties.IndicatorClassInstance,
  );

  //#region properties
  public isPill = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public isOutline = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public isDisabled = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public hasOffset = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public isRounded = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public hasBorder = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public color = input<keyof properties.IndicatorColors>('gray');
  public size = input<keyof properties.IndicatorSizes>('md');
  public placement = input<keyof properties.IndicatorPositions | undefined>(
    undefined,
  );
  public customStyle = input<Partial<properties.IndicatorBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      hasBorder: booleanToFlowbiteBoolean(this.hasBorder()),
      color: this.color(),
      isDisabled: booleanToFlowbiteBoolean(this.isDisabled()),
      hasOffset: booleanToFlowbiteBoolean(this.hasOffset()),
      isOutline: booleanToFlowbiteBoolean(this.isOutline()),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      isRounded: booleanToFlowbiteBoolean(this.isRounded()),
      size: this.size(),
      placement: this.placement(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
