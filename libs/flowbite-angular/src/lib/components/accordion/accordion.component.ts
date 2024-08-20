import type { DeepPartial } from '../../common';
import { AccordionStateService } from '../../services';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import { AccordionPanelComponent } from './accordion-panel.component';
import type { AccordionClass, AccordionColors, AccordionTheme } from './accordion.theme';
import { AccordionThemeService } from './accordion.theme.service';

import { NgClass } from '@angular/common';
import { booleanAttribute, Component, contentChildren, inject, input, signal } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/accordion/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion',
  template: `<ng-content />`,
  providers: [
    {
      provide: AccordionStateService,
      useFactory: () => {
        const service = inject(AccordionStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new AccordionStateService();
      },
    },
  ],
})
export class AccordionComponent extends BaseComponent {
  public readonly themeService = inject(AccordionThemeService);
  public readonly stateService = inject(AccordionStateService);
  public readonly accordionPanelChildren = contentChildren(AccordionPanelComponent);

  public override contentClasses = signal<AccordionClass>(createClass({ rootClass: '' }));

  //#region properties
  public isAlwaysOpen = input<boolean, unknown>(false, { transform: booleanAttribute });
  public color = input<keyof AccordionColors>('primary');
  public isFlush = input<boolean, unknown>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<AccordionTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.stateService.select('color')(),
      isFlush: booleanToFlowbiteBoolean(this.stateService.select('isFlush')()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override verify(): void {
    if (this.accordionPanelChildren().length === 0) {
      throw new Error('No AccordionPanelComponent available');
    }
  }

  public override init(): void {
    this.stateService.setState({
      isAlwaysOpen: this.isAlwaysOpen(),
      isFlush: this.isFlush(),
      color: this.color(),
    });
  }
  //#endregion

  public closeAll(): void {
    this.accordionPanelChildren().forEach((child) => child.toggleVisibility(false));
  }
}
