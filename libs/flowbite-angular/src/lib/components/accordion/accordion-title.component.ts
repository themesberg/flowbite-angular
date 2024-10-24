import type { DeepPartial } from '../../common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { CHEVRON_DOWN_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import { AccordionPanelComponent } from './accordion-panel.component';
import type { AccordionTitleClass, AccordionTitleTheme } from './accordion-title.theme';
import { AccordionTitleThemeService } from './accordion-title.theme.service';
import type { AccordionColors } from './accordion.theme';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, inject, model } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgClass, IconComponent],
  selector: 'flowbite-accordion-title',
  template: `
    <h2 [ngClass]="contentClasses().textClass">
      <ng-content />
    </h2>
    <flowbite-icon
      svgIcon="flowbite-angular:chevron-down"
      class="h-6 w-6 shrink-0 duration-200"
      [class.rotate-180]="accordionPanelComponent.isOpen()" />
  `,
  host: {
    '(click)': 'onClick()',
  },
})
export class AccordionTitleComponent extends BaseComponent<AccordionTitleClass> implements OnInit {
  public readonly themeService = inject(AccordionTitleThemeService);
  public readonly accordionPanelComponent = inject(AccordionPanelComponent);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  public color = model<keyof AccordionColors>(this.accordionPanelComponent.color());
  public customStyle = model<DeepPartial<AccordionTitleTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): AccordionTitleClass {
    return this.themeService.getClasses({
      color: this.accordionPanelComponent.accordionComponent.color(),
      isFlush: booleanToFlowbiteBoolean(this.accordionPanelComponent.accordionComponent.isFlush()),
      isOpen: booleanToFlowbiteBoolean(this.accordionPanelComponent.isOpen()),
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON),
    );
  }
  //#endregion

  public onClick(): void {
    this.accordionPanelComponent.toggleVisibility();
  }
}
