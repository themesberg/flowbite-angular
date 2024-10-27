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
  model,
  untracked,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionPanelComponent extends BaseComponent<AccordionPanelClass> implements OnInit {
  public readonly themeService = inject(AccordionPanelThemeService);
  public readonly accordionComponent = inject(AccordionComponent);
  public readonly accordionTitleChild = contentChild(AccordionTitleComponent);
  public readonly accordionContentChild = contentChild(AccordionContentComponent);

  //#region properties
  public color = model<keyof AccordionColors>(this.accordionComponent.color());
  public isOpen = model<boolean>(false);
  public customStyle = model<DeepPartial<AccordionPanelTheme>>({});
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
