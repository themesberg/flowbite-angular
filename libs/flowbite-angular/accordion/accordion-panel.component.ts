import { AccordionContentComponent } from './accordion-content.component';
import type { AccordionPanelClass, AccordionPanelTheme } from './accordion-panel.theme';
import { AccordionPanelThemeService } from './accordion-panel.theme.service';
import { AccordionTitleComponent } from './accordion-title.component';
import { AccordionComponent } from './accordion.component';
import type { AccordionColors } from './accordion.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  untracked,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_ACCORDION_PANEL_IS_OPEN_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_ACCORDION_IS_OPEN_DEFAULT_VALUE'
);

export const FLOWBITE_ACCORDION_PANEL_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<AccordionPanelTheme>
>('FLOWBITE_ACCORDION_PANEL_CUSTOM_STYLE_DEFAULT_VALUE');

export const accordionPanelDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_ACCORDION_PANEL_IS_OPEN_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_ACCORDION_PANEL_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/accordion/
 */
@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionPanelComponent extends BaseComponent<AccordionPanelClass> implements OnInit {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(AccordionPanelThemeService);
  /**
   * The parent `AccordionComponent`
   */
  public readonly accordionComponent = inject(AccordionComponent);
  /**
   * The child `AccordionTitleComponent`
   */
  public readonly accordionTitleChild = contentChild(AccordionTitleComponent);
  /**
   * The child `AccordionContentComponent`
   */
  public readonly accordionContentChild = contentChild(AccordionContentComponent);

  //#region properties
  /**
   * Set the accordion panel color
   *
   * @default `AccordionComponent`'s color
   */
  public color = model<keyof AccordionColors>(this.accordionComponent.color());
  /**
   * Set if the accordion panel is open or not
   *
   * @default false
   */
  public isOpen = model(inject(FLOWBITE_ACCORDION_PANEL_IS_OPEN_DEFAULT_VALUE));
  /**
   * Set the custom style for this accordion panel
   */
  public customStyle = model(inject(FLOWBITE_ACCORDION_PANEL_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): AccordionPanelClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.accordionTitleChild() === undefined) {
      throw new Error('No AccordionTitleComponent available');
    }
    if (this.accordionContentChild() == undefined) {
      throw new Error('No AccordionContentComponent available');
    }
  }
  //#endregion

  /**
   * Toggle isOpen for itself and close every other `AccordionPanelComponent` if the parent `AccordionComponent`'s isAlwaysOpen is false
   *
   * @param isOpen Instead of toggle, it can set the value provided
   */
  public toggleVisibility(isOpen?: boolean): void {
    if (isOpen === undefined) {
      isOpen = untracked(() => !this.isOpen());
    }

    if (isOpen && untracked(() => !this.accordionComponent.isAlwaysOpen())) {
      this.accordionComponent.closeAll();
    }

    this.isOpen.set(isOpen);
  }
}
