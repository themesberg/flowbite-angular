import { AccordionPanelState } from '../../services/state/accordion.state';
import { BaseComponent } from '../base.component';
import {
  Component,
  OnInit,
  booleanAttribute,
  inject,
  input,
} from '@angular/core';
import { SignalStoreService } from '../../services/signal-store.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  providers: [SignalStoreService<AccordionPanelState>],
})
export class AccordionPanelComponent extends BaseComponent implements OnInit {
  protected accordionPanelSignalStoreService = inject<
    SignalStoreService<AccordionPanelState>
  >(SignalStoreService<AccordionPanelState>);

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  //#endregion

  //#region BaseComponent implementation
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected override fetchClass(): void {}
  //#endregion

  public override ngOnInit(): void {
    this.accordionPanelSignalStoreService.set('isOpen', this.isOpen());

    super.ngOnInit();
  }
}
