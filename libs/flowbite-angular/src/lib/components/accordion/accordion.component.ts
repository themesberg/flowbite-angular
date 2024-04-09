import * as properties from './accordion.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import {
  booleanToFlowbiteBoolean,
  flowbiteBooleanToBoolean,
} from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input, booleanAttribute } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/accordion/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.AccordionClass,
    string
  >;
  //#region properties
  protected $flush: keyof FlowbiteBoolean = 'disabled';
  protected $customStyle: Partial<properties.AccordionBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default false */
  public get flush(): boolean {
    return flowbiteBooleanToBoolean(this.$flush);
  }
  @Input({ transform: booleanAttribute }) public set flush(value: boolean) {
    this.$flush = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default {} */
  public get customStyle(): Partial<properties.AccordionBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.AccordionBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.$flush, this.$customStyle)) {
      const propertyClass = properties.getClasses({
        flush: this.$flush,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
