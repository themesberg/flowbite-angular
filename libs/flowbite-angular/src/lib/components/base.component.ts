import { FlowbiteClass } from '../common';
import { Guid, generateId } from '../utils/id.generator';

import {
  Component,
  HostBinding,
  Injector,
  OnInit,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';

@Component({
  template: '',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[class]': 'contentClasses()?.rootClass' },
})
export abstract class BaseComponent implements OnInit {
  @HostBinding('attr.flowbite-id')
  public flowbiteId = signal<Guid>(new Guid(Guid.empty));

  protected injector = inject(Injector);

  protected contentClasses = signal<FlowbiteClass>({ rootClass: '' });

  public ngOnInit(): void {
    afterNextRender(
      () => {
        this.flowbiteId.set(generateId());
      },
      { injector: this.injector },
    );

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
