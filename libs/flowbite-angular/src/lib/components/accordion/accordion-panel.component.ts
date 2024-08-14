import type { DeepPartial } from '../../common';
import { AccordionPanelStateService } from '../../services/state/accordion.state';
import { createClass } from '../../utils';
import { BaseComponent } from '../base-component.directive';
import { AccordionContentComponent } from './accordion-content.component';
import type { AccordionPanelClass, AccordionPanelTheme } from './accordion-panel.theme';
import { AccordionPanelThemeService } from './accordion-panel.theme.service';
import { AccordionTitleComponent } from './accordion-title.component';
import { AccordionComponent } from './accordion.component';

import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, contentChild, inject, input, signal, untracked } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  template: `<ng-content />`,
  providers: [
    {
      provide: AccordionPanelStateService,
      useFactory: () => {
        const service = inject(AccordionPanelStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new AccordionPanelStateService();
      },
    },
  ],
})
export class AccordionPanelComponent extends BaseComponent implements OnInit {
  public readonly themeService = inject(AccordionPanelThemeService);
  public readonly stateService = inject(AccordionPanelStateService);
  public readonly accordionComponent = inject(AccordionComponent);
  public readonly accordionTitleChild = contentChild.required(AccordionTitleComponent);
  public readonly accordionContentChild = contentChild.required(AccordionContentComponent);

  public override contentClasses = signal<AccordionPanelClass>(createClass({ rootClass: '' }));

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<DeepPartial<AccordionPanelTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit(): void {
    this.stateService.set('isOpen', this.isOpen());

    super.ngOnInit();
  }

  public toggleVisibility(isOpen?: boolean): void {
    if (isOpen === undefined) {
      isOpen = untracked(() => !this.stateService.select('isOpen')());
    }

    if (isOpen && untracked(() => !this.accordionComponent.stateService.select('isAlwaysOpen')())) {
      this.accordionComponent.closeAll();
    }

    this.stateService.set('isOpen', isOpen);
  }
}
