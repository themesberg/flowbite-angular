import type { DeepPartial } from '../../common';
import { AccordionPanelStateService } from '../../services/state/accordion.state';
import { BaseComponent } from '../base-component.directive';
import { AccordionContentComponent } from './accordion-content.component';
import type { AccordionPanelClass, AccordionPanelTheme } from './accordion-panel.theme';
import { AccordionPanelThemeService } from './accordion-panel.theme.service';
import { AccordionTitleComponent } from './accordion-title.component';
import { AccordionComponent } from './accordion.component';
import type { AccordionColors } from './accordion.theme';

import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, contentChild, inject, input, untracked } from '@angular/core';

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
export class AccordionPanelComponent extends BaseComponent<AccordionPanelClass> implements OnInit {
  public readonly themeService = inject(AccordionPanelThemeService);
  public readonly stateService = inject(AccordionPanelStateService);
  public readonly accordionComponent = inject(AccordionComponent);
  public readonly accordionTitleChild = contentChild(AccordionTitleComponent);
  public readonly accordionContentChild = contentChild(AccordionContentComponent);

  //#region properties
  public color = input<keyof AccordionColors>(this.accordionComponent.color());
  public isOpen = input<boolean, unknown>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<AccordionPanelTheme>>({});
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

  public override init(): void {
    this.stateService.setState({
      isOpen: this.isOpen(),
    });
  }
  //#endregion

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
