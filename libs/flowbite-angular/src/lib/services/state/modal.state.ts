import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

export interface ModalState {
  isOpen: boolean;
}

@Injectable()
export class ModalStateService extends SignalStoreService<ModalState> {}
