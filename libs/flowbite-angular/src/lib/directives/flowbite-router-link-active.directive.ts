import routerLinkActiveInputs from '../utils/directives/inputs/router-link-active.input';
import routerLinkActiveOutputs from '../utils/directives/outputs/router-link-active.output';

import type { Signal } from '@angular/core';
import { Directive, HostListener, inject, signal } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

/**
 * Wrapping directive over RouterLinkActive.
 *
 * @usageNotes
 * It provides a clean way to have 'isActive' data with signal base value.
 *
 * @see `RouterLinkActive`
 */
@Directive({
  standalone: true,
  selector: '[flowbiteRouterLinkActive]',
  hostDirectives: [
    {
      directive: RouterLinkActive,
      inputs: routerLinkActiveInputs,
      outputs: routerLinkActiveOutputs,
    },
  ],
})
export class FlowbiteRouterLinkActiveDirective {
  private readonly ariaCurrentValue: boolean = true;

  public routerLinkActive = inject(RouterLinkActive);

  private _isActive = signal<boolean>(this.routerLinkActive.isActive);

  public get isActive(): Signal<boolean> {
    return this._isActive.asReadonly();
  }

  /**
   * Set the RouterLinkActive's ariaCurrentWhenActive to the value passed to the component (via this Directive).
   */
  constructor() {
    this.routerLinkActive.ariaCurrentWhenActive = this.ariaCurrentValue;
  }

  @HostListener('isActiveChange') onIsActiveChange(): void {
    this._isActive.set(this.routerLinkActive.isActive);
  }
}
