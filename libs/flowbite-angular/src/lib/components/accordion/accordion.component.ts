import * as properties from './accordion.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionComponent extends BaseComponent {
  //#region properties
  protected $flush: keyof FlowbiteBoolean = 'disabled';
  protected $customStyle: Partial<properties.AccordionBaseTheme> = {};
  //#endregion
  //#region getter/setter
  public get flush(): keyof FlowbiteBoolean {
    return this.$flush;
  }
  @Input() public set flush(value: keyof FlowbiteBoolean) {
    this.$flush = value;
    this.fetchClass();
  }

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
    if (paramNotNull(this.flush, this.customStyle)) {
      const propertyClass = properties.getClasses({
        flush: this.flush,
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.root;
    }
  }
  //#endregion
}
