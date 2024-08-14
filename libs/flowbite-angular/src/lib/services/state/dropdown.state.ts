import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

@Injectable()
export class DropdownStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
