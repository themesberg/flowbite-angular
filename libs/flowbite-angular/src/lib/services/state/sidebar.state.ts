import type { SidebarDisplayMode } from '../../components/sidebar/sidebar.theme';
import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

@Injectable()
export class SidebarStateService extends SignalStoreService<{
  displayMode: keyof SidebarDisplayMode;
  isOpen: boolean;
}> {}

@Injectable()
export class SidebarItemGroupStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
