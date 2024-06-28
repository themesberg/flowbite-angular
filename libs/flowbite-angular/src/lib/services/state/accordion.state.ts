import { Injectable } from '@angular/core';
import { SignalStoreService } from '../signal-store.service';

export interface AccordionState {
  isFlush: boolean;
}

@Injectable()
export class AccordionStateService extends SignalStoreService<AccordionState> {}

export interface AccordionPanelState {
  isOpen: boolean;
}

@Injectable()
export class AccordionPanelStateService extends SignalStoreService<AccordionPanelState> {}
