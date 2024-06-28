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
})
export abstract class BaseComponent implements OnInit {
  @HostBinding('attr.flowbite-id')
  protected get getFlowbiteId() {
    return this.flowbiteId();
  }

  @HostBinding('class')
  protected get getHostClass() {
    return this.contentClasses()?.rootClass;
  }

  public readonly flowbiteId = signal<Guid>(new Guid(Guid.empty));
  protected contentClasses = signal<FlowbiteClass>({ rootClass: '' });

  protected readonly injector = inject(Injector);

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
