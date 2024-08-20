import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
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
import { Component, HostListener, inject, input, signal } from '@angular/core';
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
      [class.rotate-180]="accordionPanelComponent.stateService.select('isOpen')()" />
  `,
})
export class AccordionTitleComponent extends BaseComponent implements OnInit {
  public readonly themeService = inject(AccordionTitleThemeService);
  public readonly accordionPanelComponent = inject(AccordionPanelComponent);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<AccordionTitleClass>(createClass({ rootClass: '', textClass: '' }));

  //#region properties
  public color = input<keyof AccordionColors>(this.accordionPanelComponent.color());
  public customStyle = input<DeepPartial<AccordionTitleTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.accordionPanelComponent.accordionComponent.stateService.select('color')(),
      isFlush: booleanToFlowbiteBoolean(
        this.accordionPanelComponent.accordionComponent.stateService.select('isFlush')(),
      ),
      isOpen: booleanToFlowbiteBoolean(this.accordionPanelComponent.stateService.select('isOpen')()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON),
    );
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    this.accordionPanelComponent.toggleVisibility();
  }
}
