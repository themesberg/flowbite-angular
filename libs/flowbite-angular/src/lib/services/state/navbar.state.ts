import { Injectable } from '@angular/core';
import { SignalStoreService } from '../signal-store.service';

export interface NavbarState {
  isOpen: boolean;
}

@Injectable()
export class NavbarStateService extends SignalStoreService<NavbarState> {}
