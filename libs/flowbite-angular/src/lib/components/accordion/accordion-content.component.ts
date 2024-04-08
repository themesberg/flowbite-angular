import * as properties from './accordion-content.theme';
import { AccordionPanelComponent } from './accordion-panel.component';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-accordion-content',
  templateUrl: './accordion-content.component.html',
})
export class AccordionContentComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.AccordionContentClass,
    string
  >;
  //#region properties
  protected $customStyle: Partial<properties.AccordionContentBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default {} */
  public get customStyle(): Partial<properties.AccordionContentBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.AccordionContentBaseTheme>,
  ) {
    this.$customStyle = value;
  }
  //#endregion

  constructor(readonly accordionPanel: AccordionPanelComponent) {
    super();
  }

  //#region  BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.$customStyle)) {
      const propertyClass = properties.getClasses({
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
