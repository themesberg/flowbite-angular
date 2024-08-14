import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

@Injectable()
export class ModalStateService extends SignalStoreService<{
  isOpen: boolean;
}> {}
