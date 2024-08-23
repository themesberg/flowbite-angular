import type { Signal } from '@angular/core';
import { computed, Injectable, signal } from '@angular/core';

export class SignalStoreService<T> {
  private _state = signal({} as T);

  public get state(): Signal<T> {
    return this._state.asReadonly();
  }

  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this._state()[key]);
  }

  public set<K extends keyof T>(key: K, data: T[K]) {
    if (this._state()[key] !== data) {
      this._state.update((currentValue) => ({ ...currentValue, [key]: data }));
    }
  }

  public setState(state: T) {
    this._state.set(state);
  }
}

@Injectable({ providedIn: 'root' })
export class GlobalSignalStoreService<T> extends SignalStoreService<T> {}
