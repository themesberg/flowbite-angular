import type { FlowbiteClass } from './type-definitions/flowbite.class';
import { generateId, Guid } from './type-definitions/flowbite.id';

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
  /**
   * `Injector` instance injected to be used as an injector context where there is no default one.
   *
   * @example
   * ```
   * public ngOnInit(): void {
   *   afterNextRender(
   *      () => {},
   *      { injector: this.injector }
   *   );
   * }
   * ```
   */
  public readonly injector = inject(Injector);

  /**
   * Auto generated GUID for each flowbite-angular component
   *
   * Its default value is 00000000-0000-0000-0000-000000000000, and is set to a random GUID inside the `afterNextRender` hook
   */
  public readonly flowbiteId = signal<Guid>(new Guid(Guid.empty));

  /**
   * Computed signal storing the component classes used in its template
   */
  public contentClasses = computed<TClass>(() => this.fetchClass());

  /**
   * Initialize component.
   *
   * A call to verify and init function is done. Then a new Guid is set in the `afterNextRender` hook.
   */
  public ngOnInit(): void {
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
   * Function to load component's classes
   */
  public abstract fetchClass(): TClass;
}
