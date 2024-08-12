import type { FlowbiteClass } from '../common';
import { generateId, Guid } from '../utils/id.generator';

import type { OnInit, Signal } from '@angular/core';
import { afterNextRender, Directive, effect, HostBinding, inject, Injector, signal } from '@angular/core';

@Directive({
  standalone: true,
})
export abstract class BaseComponentDirective implements OnInit {
  @HostBinding('class')
  get hostClass() {
    return this.contentClasses().rootClass;
  }

  @HostBinding('attr.flowbite-id')
  get getFlowbiteId() {
    return this.flowbiteId();
  }

  public readonly injector = inject(Injector);

  public readonly flowbiteId = signal<Guid>(new Guid(Guid.empty));

  public abstract contentClasses: Signal<FlowbiteClass>;

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
  public abstract fetchClass(): void;
}
