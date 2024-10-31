import { AccordionPanelComponent } from './accordion-panel.component';
import type { AccordionClass, AccordionColors, AccordionTheme } from './accordion.theme';
import { AccordionThemeService } from './accordion.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/accordion/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent extends BaseComponent<AccordionClass> {
  /**
   * Service injected used to generated class
   */
  public readonly themeService = inject(AccordionThemeService);
  /**
   * List of `AccordionPanelComponent`
   */
  public readonly accordionPanelChildren = contentChildren(AccordionPanelComponent);

  //#region properties
  /**
   * Does the opened `AccordionPanelComponent` stay open if another one is opening
   */
  public isAlwaysOpen = model<boolean>(false);
  /**
   * Set the accordion color and every child default color
   *
   * @default primary
   */
  public color = model<keyof AccordionColors>('primary');
  /**
   * Set the accordion as flush or not
   */
  public isFlush = model<boolean>(false);
  /**
   * Set the custom style for this accordion
   */
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

  /**
   * Close every `AccordionPanelComponent`
   */
  public closeAll(): void {
    this.accordionPanelChildren().forEach((child) => child.toggleVisibility(false));
  }
}
