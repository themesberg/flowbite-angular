import { Injectable } from '@angular/core';
import { SignalStoreService } from '../signal-store.service';

export interface DropdownState {
  isOpen: boolean;
}

@Injectable()
export class DropdownStateService extends SignalStoreService<DropdownState> {}
