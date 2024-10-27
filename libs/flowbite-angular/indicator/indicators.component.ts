import type {
  indicatorClass,
  IndicatorColors,
  IndicatorPositions,
  IndicatorSizes,
  IndicatorTheme,
} from './indicators.theme';
import { IndicatorThemeService } from './indicators.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import { Component, inject, model } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/indicators/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-indicator',
  template: `<ng-content />`,
})
export class IndicatorComponent extends BaseComponent<indicatorClass> {
  public readonly themeService = inject(IndicatorThemeService);

  //#region properties
  public isPill = model<boolean>(false);
  public isOutline = model<boolean>(false);
  public isDisabled = model<boolean>(false);
  public hasOffset = model<boolean>(false);
  public isRounded = model<boolean>(false);
  public hasBorder = model<boolean>(false);
  public color = model<keyof IndicatorColors>('primary');
  public size = model<keyof IndicatorSizes>('md');
  public placement = model<keyof IndicatorPositions | undefined>(undefined);
  public customStyle = model<DeepPartial<IndicatorTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): indicatorClass {
    return this.themeService.getClasses({
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
  }
  //#endregion
}
