import * as properties from './indicators.theme';
import { BaseComponent } from '../base.component';
import { FlowbitePositions, FlowbiteSizes } from '../../common/flowbite.theme';
import { paramNotNull } from '../../utils/param.util';

import { Component, booleanAttribute, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

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
  protected override contentClasses = signal<properties.indicatorClass>(
    properties.IndicatorClassInstance(),
  );

  //#region properties
  public isPill = input(false, { transform: booleanAttribute });
  public isOutline = input(false, { transform: booleanAttribute });
  public isDisabled = input(false, { transform: booleanAttribute });
  public hasOffset = input(false, { transform: booleanAttribute });
  public isRounded = input(false, { transform: booleanAttribute });
  public hasBorder = input(false, { transform: booleanAttribute });
  public color = input<keyof properties.IndicatorColors>('gray');
  public size = input<keyof FlowbiteSizes>('md');
  public placement = input<keyof FlowbitePositions | undefined>(undefined);
  public customStyle = input<Partial<properties.IndicatorBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (
      paramNotNull(
        booleanToFlowbiteBoolean(this.hasBorder()),
        this.color(),
        booleanToFlowbiteBoolean(this.isDisabled()),
        booleanToFlowbiteBoolean(this.hasOffset()),
        booleanToFlowbiteBoolean(this.isOutline()),
        booleanToFlowbiteBoolean(this.isPill()),
        booleanToFlowbiteBoolean(this.isRounded()),
        this.size(),
        this.customStyle(),
      )
    ) {
      const propertyClass = properties.getClasses({
        border: booleanToFlowbiteBoolean(this.hasBorder()),
        color: this.color(),
        disabled: booleanToFlowbiteBoolean(this.isDisabled()),
        offset: booleanToFlowbiteBoolean(this.hasOffset()),
        outline: booleanToFlowbiteBoolean(this.isOutline()),
        pill: booleanToFlowbiteBoolean(this.isPill()),
        rounded: booleanToFlowbiteBoolean(this.isRounded()),
        size: this.size(),
        placement: this.placement(),
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion
}
