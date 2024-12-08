import { AccordionPanelComponent } from './accordion-panel.component';
import type { AccordionTitleClass, AccordionTitleTheme } from './accordion-title.theme';
import { AccordionTitleThemeService } from './accordion-title.theme.service';
import type { AccordionColors } from './accordion.theme';

import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import type { DeepPartial } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { CHEVRON_DOWN_SVG_ICON } from 'flowbite-angular/utils';

import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @see https://flowbite.com/docs/components/accordion/
 */
@Component({
  standalone: true,
  imports: [IconComponent],
  selector: 'flowbite-accordion-title',
  template: `
    <h2 [class]="contentClasses().textClass">
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionTitleComponent extends BaseComponent<AccordionTitleClass> implements OnInit {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(AccordionTitleThemeService);
  /**
   * The parent `AccordionPanelComponent`
   */
  public readonly accordionPanelComponent = inject(AccordionPanelComponent);
  /**
   * `IconRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  /**
   * Set the accordion title color
   *
   * @default `AccordionPanelComponents`'s color
   */
  public color = model<keyof AccordionColors>(this.accordionPanelComponent.color());
  /**
   * Set the custom style for this accordion title
   */
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
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON)
    );
  }
  //#endregion

  /**
   * Toggle the parent `AccordionPanelComponent`'s isOpen
   */
  public onClick(): void {
    this.accordionPanelComponent.toggleVisibility();
  }
}
