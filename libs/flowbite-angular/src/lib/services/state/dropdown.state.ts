import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

export interface DropdownState {
  isOpen: boolean;
}

@Injectable()
export class DropdownStateService extends SignalStoreService<DropdownState> {}
