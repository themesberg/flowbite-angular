import { AccordionPanelState } from '../../services/state/accordion.state';
import { BaseComponent } from '../base.component';
import { Component, booleanAttribute, inject, input } from '@angular/core';
import { SignalStoreService } from '../../services/signal-store.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  providers: [SignalStoreService<AccordionPanelState>],
})
export class AccordionPanelComponent extends BaseComponent {
  protected signalStoreService = inject<
    SignalStoreService<AccordionPanelState>
  >(SignalStoreService<AccordionPanelState>);

  //#region properties
  protected _open = input(false, { transform: booleanAttribute });
  //#endregion

  //#region BaseComponent implementation
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected override fetchClass(): void {}
  //#endregion
}
