import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

/**
 * Service that keep the state of an navbar component.
 *
 * @see `NavbarComponent`
 */
@Injectable()
export class NavbarStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
