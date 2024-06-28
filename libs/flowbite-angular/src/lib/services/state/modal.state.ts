import { Injectable } from '@angular/core';
import { SignalStoreService } from '../signal-store.service';

export interface ModalState {
  isOpen: boolean;
}

@Injectable()
export class ModalStateService extends SignalStoreService<ModalState> {}
