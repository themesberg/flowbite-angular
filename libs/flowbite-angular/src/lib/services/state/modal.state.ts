import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

/**
 * Service that keep the state of an modal component.
 *
 * @see `ModalComponent`
 */
@Injectable()
export class ModalStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
