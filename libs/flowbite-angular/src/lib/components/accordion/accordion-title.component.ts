import type { DeepPartial } from '../../common';
import { AccordionPanelStateService, AccordionStateService } from '../../services';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { CHEVRON_DOWN_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base.component';
import { IconComponent, IconRegistry } from '../icon';
import * as properties from './accordion-title.theme';
import { AccordionTitleThemeService } from './accordion-title.theme.service';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgClass, IconComponent],
  selector: 'flowbite-accordion-title',
  template: `
    <h2 class="font-bold text-lg">
      <ng-content />
    </h2>
    <flowbite-icon
      svgIcon="flowbite-angular:chevron-down"
      class="h-6 w-6 shrink-0 duration-200"
      [class.rotate-180]="accordionPanelStateService.select('isOpen')()" />
  `,
})
export class AccordionTitleComponent extends BaseComponent implements OnInit {
  protected readonly themeService = inject(AccordionTitleThemeService);
  protected readonly accordionPanelStateService = inject(AccordionPanelStateService);
  protected readonly accordionStateService = inject(AccordionStateService);
  protected readonly iconRegistry = inject(IconRegistry);
  protected readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<properties.AccordionTitleClass>(properties.AccordionTitleClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.AccordionTitleBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
      isFlush: booleanToFlowbiteBoolean(this.accordionStateService.select('isFlush')()),
      isOpen: booleanToFlowbiteBoolean(this.accordionPanelStateService.select('isOpen')()),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit() {
    super.ngOnInit();

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON),
    );
  }

  @HostListener('click')
  public onClick(): void {
    const isOpen = this.accordionPanelStateService.select('isOpen')();

    this.accordionPanelStateService.set('isOpen', !isOpen);
  }
}
