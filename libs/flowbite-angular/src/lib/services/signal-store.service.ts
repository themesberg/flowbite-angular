import type { Signal } from '@angular/core';
import { computed, Injectable, signal } from '@angular/core';

/**
 * Signal based store service used in several flowbite-angular components.
 *
 * @usageNotes
 * You can't use SignalStoreService as it is, you must inherite another class from it with its generic type T.
 *
 * @example
 * export class ComponentStateService extends SignalStoreService<{isOpen: boolean;}> {}
 */
export abstract class SignalStoreService<T> {
  private _state = signal({} as T);

  /**
   * Accessor for the data.
   */
  public get state(): Signal<T> {
    return this._state.asReadonly();
  }

  /**
   * Get the value for the provided key.
   *
   * @param key Keyof T type.
   * @returns The value for the provided key.
   */
  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this._state()[key]);
  }

  /**
   * Set the value for the provided key.
   *
   * @param key Keyof T type.
   * @param data Data for the key.
   */
  public set<K extends keyof T>(key: K, data: T[K]) {
    this._state.update((currentValue) => ({ ...currentValue, [key]: data }));
  }

  /**
   * Set the value for the entire type.
   *
   * @param state The value to be set.
   */
  public setState(state: T) {
    this._state.set(state);
  }
}

/**
 * @usageNotes
 * You can use SignalStoreService as it isSince it is provided in 'root'.
 */
@Injectable({ providedIn: 'root' })
export abstract class GlobalSignalStoreService<T> extends SignalStoreService<T> {}
