import type { AccordionColors } from '../../components';
import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

export interface AccordionState {
  color: keyof AccordionColors;
  isFlush: boolean;
}

@Injectable()
export class AccordionStateService extends SignalStoreService<AccordionState> {}

export interface AccordionPanelState {
  isOpen: boolean;
}

@Injectable()
export class AccordionPanelStateService extends SignalStoreService<AccordionPanelState> {}
