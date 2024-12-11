import type { AccordionContentClass, AccordionContentTheme } from './accordion-content.theme';
import { AccordionContentThemeService } from './accordion-content.theme.service';
import { AccordionPanelComponent } from './accordion-panel.component';
import type { AccordionColors } from './accordion.theme';

import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import type { DeepPartial } from 'flowbite-angular';

import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_ACCORDION_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<AccordionContentTheme>
>('FLOWBITE_ACCORDION_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE');

export const accordionContentDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_ACCORDION_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/accordion/
 */
@Component({
  standalone: true,
  selector: 'flowbite-accordion-content',
  template: `<ng-content />`,
  host: {
    '[@isOpenAnimation]': 'accordionPanelComponent.isOpen()',
  },
  animations: [
    trigger('isOpenAnimation', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('true <=> false', animate('300ms')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionContentComponent extends BaseComponent<AccordionContentClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(AccordionContentThemeService);
  /**
   * The parent `AccordionPanelComponent`
   */
  public readonly accordionPanelComponent = inject(AccordionPanelComponent);

  //#region properties
  /**
   * Set the accordion content color
   * 
   @default `AccordionPanelComponent`'s color
   */
  public color = model<keyof AccordionColors>(this.accordionPanelComponent.color());
  /**
   * Set the custom style for this accordion content
   */
  public customStyle = model(inject(FLOWBITE_ACCORDION_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): AccordionContentClass {
    return this.themeService.getClasses({
      color: this.accordionPanelComponent.accordionComponent.color(),
      isFlush: booleanToFlowbiteBoolean(this.accordionPanelComponent.accordionComponent.isFlush()),
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
