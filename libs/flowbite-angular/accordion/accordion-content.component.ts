import type { AccordionContentClass, AccordionContentTheme } from './accordion-content.theme';
import { AccordionContentThemeService } from './accordion-content.theme.service';
import { AccordionPanelComponent } from './accordion-panel.component';
import type { AccordionColors } from './accordion.theme';

import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import type { DeepPartial } from 'flowbite-angular';

import { NgClass, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-accordion-content',
  template: `
    <ng-container *ngIf="accordionPanelComponent.isOpen()">
      <ng-content />
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionContentComponent extends BaseComponent<AccordionContentClass> {
  public readonly themeService = inject(AccordionContentThemeService);
  public readonly accordionPanelComponent = inject(AccordionPanelComponent);

  //#region properties
  public color = model<keyof AccordionColors>(this.accordionPanelComponent.color());
  public customStyle = model<DeepPartial<AccordionContentTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): AccordionContentClass {
    return this.themeService.getClasses({
      color: this.accordionPanelComponent.accordionComponent.color(),
      isOpen: booleanToFlowbiteBoolean(this.accordionPanelComponent.isOpen()),
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
