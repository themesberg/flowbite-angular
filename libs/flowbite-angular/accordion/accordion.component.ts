import { AccordionPanelComponent } from './accordion-panel.component';
import type { AccordionClass, AccordionColors, AccordionTheme } from './accordion.theme';
import { AccordionThemeService } from './accordion.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_ACCORDION_IS_ALWAYS_OPEN_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_ACCORDION_IS_ALWAYS_OPEN'
);

export const FLOWBITE_ACCORDION_COLOR_DEFAULT_VALUE = new InjectionToken<keyof AccordionColors>(
  'FLOWBITE_ACCORDION_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_ACCORDION_IS_FLUSH_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_ACCORDION_IS_FLUSH_DEFAULT_VALUE'
);

export const FLOWBITE_ACCORDION_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<AccordionTheme>
>('FLOWBITEèACCORDION_CUSTOM_STYLE_DEFAULT_VALUE');

export const accordionDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_ACCORDION_IS_ALWAYS_OPEN_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_ACCORDION_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_ACCORDION_IS_FLUSH_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_ACCORDION_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

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
   *
   * @default false
   */
  public isAlwaysOpen = model(inject(FLOWBITE_ACCORDION_IS_ALWAYS_OPEN_DEFAULT_VALUE));
  /**
   * Set the accordion color and every child default color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_ACCORDION_COLOR_DEFAULT_VALUE));
  /**
   * Set the accordion as flush or not
   *
   * @default false
   */
  public isFlush = model(inject(FLOWBITE_ACCORDION_IS_FLUSH_DEFAULT_VALUE));
  /**
   * Set the custom style for this accordion
   */
  public customStyle = model<DeepPartial<AccordionTheme>>(
    inject(FLOWBITE_ACCORDION_CUSTOM_STYLE_DEFAULT_VALUE)
  );
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): AccordionClass {
    return this.themeService.getClasses({
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
