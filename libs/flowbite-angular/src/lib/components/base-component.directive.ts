import type { FlowbiteClass } from '../common';
import { generateId, Guid } from '../utils/id.generator';

import type { OnInit } from '@angular/core';
import { afterNextRender, computed, Directive, inject, Injector, signal } from '@angular/core';

@Directive({
  standalone: true,
  host: {
    '[class]': 'this.contentClasses().rootClass',
    '[attr.flowbite-id]': 'this.flowbiteId()',
  },
})
export abstract class BaseComponent<TClass extends FlowbiteClass> implements OnInit {
  public readonly injector = inject(Injector);

  public readonly flowbiteId = signal<Guid>(new Guid(Guid.empty));

  public contentClasses = computed<TClass>(() => this.fetchClass());

  public ngOnInit(): void {
    this.verify();
    this.init();

    afterNextRender(
      () => {
        this.flowbiteId.set(generateId());
      },
      { injector: this.injector }
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public init(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public verify(): void {}

  /**
   * Function to load component's classes
   */
  public abstract fetchClass(): TClass;
}
