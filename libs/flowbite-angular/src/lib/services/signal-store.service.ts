import { Injectable, Signal, computed, signal } from '@angular/core';

@Injectable()
export class SignalStoreService<T> {
  private _state = signal({} as T);

  public get state(): Signal<T> {
    return this._state.asReadonly();
  }

  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this._state()[key]);
  }

  public set<K extends keyof T>(key: K, data: T[K]) {
    this._state.update((currentValue) => ({ ...currentValue, [key]: data }));
  }

  public setState(state: T) {
    this._state.set(state);
  }
}
