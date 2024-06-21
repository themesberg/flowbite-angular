import * as properties from './accordion-panel.theme';

import { AccordionPanelState } from '../../services/state/accordion.state';
import { AccordionPanelThemeService } from './accordion-panel.theme.service';
import { BaseComponent } from '../base.component';
import { SignalStoreService } from '../../services/signal-store.service';

import {
  Component,
  OnInit,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  providers: [SignalStoreService<AccordionPanelState>],
})
export class AccordionPanelComponent extends BaseComponent implements OnInit {
  protected readonly themeService = inject(AccordionPanelThemeService);
  protected readonly accordionPanelSignalStoreService = inject<
    SignalStoreService<AccordionPanelState>
  >(SignalStoreService<AccordionPanelState>);

  protected override contentClasses = signal<properties.AccordionPanelClass>(
    properties.AccordionPanelClassInstance,
  );

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<Partial<properties.AccordionPanelBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit(): void {
    this.accordionPanelSignalStoreService.set('isOpen', this.isOpen());

    super.ngOnInit();
  }
}
