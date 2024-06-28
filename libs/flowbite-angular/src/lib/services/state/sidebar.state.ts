import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

export interface SidebarState {
  isOpen: boolean;
}

@Injectable()
export class SidebarStateService extends SignalStoreService<SidebarState> {}

export interface SidebarItemGroupState {
  isOpen: boolean;
}

@Injectable()
export class SidebarItemGroupStateService extends SignalStoreService<SidebarItemGroupState> {}
