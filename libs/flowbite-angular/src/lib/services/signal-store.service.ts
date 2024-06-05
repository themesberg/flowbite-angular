import { Injectable, Signal, computed, signal } from '@angular/core';

@Injectable()
export class SignalStoreService<T> {
  readonly state = signal({} as T);

  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }

  public set<K extends keyof T>(key: K, data: T) {
    this.state.update((currentValue) => ({ ...currentValue, [key]: data }));
  }

  public setState(partialState: Partial<T>) {
    this.state.update((currentValue) => ({ ...currentValue, partialState }));
  }
}
