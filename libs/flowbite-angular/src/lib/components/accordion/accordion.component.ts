import type { DeepPartial } from '../../common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import { AccordionPanelComponent } from './accordion-panel.component';
import type { AccordionClass, AccordionColors, AccordionTheme } from './accordion.theme';
import { AccordionThemeService } from './accordion.theme.service';

import { NgClass } from '@angular/common';
import { Component, contentChildren, inject, model } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion',
  template: `<ng-content />`,
})
export class AccordionComponent extends BaseComponent<AccordionClass> {
  public readonly themeService = inject(AccordionThemeService);
  public readonly accordionPanelChildren = contentChildren(AccordionPanelComponent);

  //#region properties
  public isAlwaysOpen = model<boolean>(false);
  public color = model<keyof AccordionColors>('primary');
  public isFlush = model<boolean>(false);
  public customStyle = model<DeepPartial<AccordionTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): AccordionClass {
    return this.themeService.getClasses({
      color: this.color(),
      isFlush: booleanToFlowbiteBoolean(this.isFlush()),
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.accordionPanelChildren().length === 0) {
      throw new Error('No AccordionPanelComponent available');
    }
  }
  //#endregion

  public closeAll(): void {
    this.accordionPanelChildren().forEach((child) => child.toggleVisibility(false));
  }
}
