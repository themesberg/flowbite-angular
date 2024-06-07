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
  host: { '[class]': 'contentClasses()?.rootClass' },
})
export abstract class BaseComponent implements OnInit {
  protected injector = inject(Injector);
  protected contentClasses = signal<FlowbiteClass>({ rootClass: '' });

  public ngOnInit(): void {
    effect(
      () => {
        this.fetchClass();
      },
      { injector: this.injector, allowSignalWrites: true },
    );
  }

  /**
   * Function to load component's classes
   */
  protected abstract fetchClass(): void;
}
