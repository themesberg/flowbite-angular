import * as properties from './accordion-title.theme';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel.component';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion-title',
  templateUrl: './accordion-title.component.html',
})
export class AccordionTitleComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.AccordionTitleClass,
    string
  >;
  //#region properties
  protected $customStyle: Partial<properties.AccordionTitleBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default {} */
  public get customStyle(): Partial<properties.AccordionTitleBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.AccordionTitleBaseTheme>,
  ) {
    this.$customStyle = value;
  }
  //#endregion

  constructor(
    readonly accordion: AccordionComponent,
    readonly accordionPanel: AccordionPanelComponent,
  ) {
    super();
  }

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.$customStyle)) {
      const propertyClass = properties.getClass({
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
