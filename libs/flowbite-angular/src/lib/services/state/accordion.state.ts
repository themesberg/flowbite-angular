import type { AccordionColors } from '../../components';
import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

@Injectable()
export class AccordionStateService extends SignalStoreService<{
  isAlwaysOpen: boolean;
  color: keyof AccordionColors;
  isFlush: boolean;
}> {}

@Injectable()
export class AccordionPanelStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
