import {
  Component,
  Injector,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FlowbiteClass } from '../common';

@Component({
  template: '',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[class]': 'contentClassesSignal()?.rootClass' },
})
export abstract class BaseComponent implements OnInit {
  protected injector = inject(Injector);
  protected contentClasses?: Record<string, string>;

  public ngOnInit(): void {
    this.fetchClass();

    effect(
      () => {
        this.fetchClassSignal();
      },
      { injector: this.injector, allowSignalWrites: true },
    );
  }

  /**
   * Function to load component's classes
   */
  protected abstract fetchClass(): void;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected fetchClassSignal(): void {}

  protected contentClassesSignal = signal<FlowbiteClass>({ rootClass: '' });
}
