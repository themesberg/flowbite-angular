import { Injectable } from '@angular/core';
import { SignalStoreService } from './signal-store.service';

@Injectable({ providedIn: 'root' })
export class GlobalSignalStoreService<T> extends SignalStoreService<T> {}
