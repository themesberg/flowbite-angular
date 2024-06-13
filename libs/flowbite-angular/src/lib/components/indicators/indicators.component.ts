import * as properties from './indicators.theme';
import { BaseComponent } from '../base.component';
import { FlowbitePositions, FlowbiteSizes } from '../../common/flowbite.theme';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { Component, booleanAttribute, input, signal } from '@angular/core';
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
  //#endregion
}
