import type { SidebarDisplayMode } from '../../components/sidebar/sidebar.theme';
import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

/**
 * Service that keep the state of an sidebar component.
 *
 * @see `SidebarComponent`
 */
@Injectable()
export class SidebarStateService extends SignalStoreService<{
  displayMode: keyof SidebarDisplayMode;
  isOpen: boolean;
}> {}

/**
 * Service that keep the state of an accordion component.
 *
 * @see `SidebarItemGroupComponent`
 */
@Injectable()
export class SidebarItemGroupStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
