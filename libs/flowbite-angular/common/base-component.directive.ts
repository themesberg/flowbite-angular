import type { FlowbiteClass } from './type-definitions/flowbite.class';

import { generateId, Guid } from 'flowbite-angular/utils';

import type { OnInit } from '@angular/core';
import { afterNextRender, computed, Directive, inject, Injector, signal } from '@angular/core';

/**
 * Base abstract component.
 * Every flowbite-angular components has to extends on this one.
 */
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

  /**
   * Initialize component.
   *
   * A call to verify and init function is done. Then a new Guid is set in the `afterNextRender` hook.
   */
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

  /**
   * Function loaded during `OnInit` lifecycle hook. It initialize requirments for the component.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public init(): void {}

  /**
   * Function loaded during the `OnInit` lifecycle hook. It ensure that required initialization is done.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public verify(): void {}

  /**
   * Function to load component's classes
   */
  public abstract fetchClass(): TClass;
}
