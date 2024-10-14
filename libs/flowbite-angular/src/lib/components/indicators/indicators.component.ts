import type { DeepPartial } from '../../common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import type {
  indicatorClass,
  IndicatorColors,
  IndicatorPositions,
  IndicatorSizes,
  IndicatorTheme,
} from './indicators.theme';
import { IndicatorThemeService } from './indicators.theme.service';

import { NgClass } from '@angular/common';
import { booleanAttribute, Component, inject, input } from '@angular/core';

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
  public isPill = input<boolean, unknown>(false, { transform: booleanAttribute });
  public isOutline = input<boolean, unknown>(false, { transform: booleanAttribute });
  public isDisabled = input<boolean, unknown>(false, { transform: booleanAttribute });
  public hasOffset = input<boolean, unknown>(false, { transform: booleanAttribute });
  public isRounded = input<boolean, unknown>(false, { transform: booleanAttribute });
  public hasBorder = input<boolean, unknown>(false, { transform: booleanAttribute });
  public color = input<keyof IndicatorColors>('primary');
  public size = input<keyof IndicatorSizes>('md');
  public placement = input<keyof IndicatorPositions | undefined>(undefined);
  public customStyle = input<DeepPartial<IndicatorTheme>>({});
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
