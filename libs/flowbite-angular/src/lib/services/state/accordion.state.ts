import type { AccordionColors } from '../../components';
import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

/**
 * Service that keep the state of an accordion component.
 *
 * @see `AccordionComponent`
 */
@Injectable()
export class AccordionStateService extends SignalStoreService<{
  isAlwaysOpen: boolean;
  color: keyof AccordionColors;
  isFlush: boolean;
}> {}

/**
 * Service that keep state of an accordion panel component.
 *
 * @see `AccordionPanelComponent`
 */
@Injectable()
export class AccordionPanelStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
