import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

@Injectable()
export class NavbarStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
