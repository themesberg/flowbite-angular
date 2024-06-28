import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

export interface NavbarState {
  isOpen: boolean;
}

@Injectable()
export class NavbarStateService extends SignalStoreService<NavbarState> {}
