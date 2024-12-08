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

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/indicators/
 */
@Component({
  standalone: true,
  selector: 'flowbite-indicator',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndicatorComponent extends BaseComponent<indicatorClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(IndicatorThemeService);

  //#region properties
  /**
   * Set if the indicator is pill
   *
   * @default false
   */
  public isPill = model<boolean>(false);
  /**
   * Set if the indicator is outline
   *
   * @default false
   */
  public isOutline = model<boolean>(false);
  /**
   * Set if the indicator is disable
   *
   * @default false
   */
  public isDisabled = model<boolean>(false);
  /**
   * Set if the indicator has offset
   *
   * @default false
   */
  public hasOffset = model<boolean>(false);
  /**
   * Set if the indicator is rounded
   *
   * @default false
   */
  public isRounded = model<boolean>(false);
  /**
   * Set if the indicator has border
   *
   * @default false
   */
  public hasBorder = model<boolean>(false);
  /**
   * Set the indicator color
   *
   * @default primary
   */
  public color = model<keyof IndicatorColors>('primary');
  /**
   * Set the indicator size
   *
   * @default md
   */
  public size = model<keyof IndicatorSizes>('md');
  /**
   * Set the indicator placement
   *
   * @default undefined
   */
  public placement = model<keyof IndicatorPositions | undefined>(undefined);
  /**
   * Set the custom style for this indicator
   */
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
