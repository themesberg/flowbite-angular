import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

/**
 * Service that keep the state of an dropdown component.
 *
 * @see `DropdownComponent`
 */
@Injectable()
export class DropdownStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
