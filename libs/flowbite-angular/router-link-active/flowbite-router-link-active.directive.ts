import type { Signal } from '@angular/core';
import { Directive, inject, signal } from '@angular/core';
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
  host: {
    isActiveChange: 'onIsActiveChange',
  },
  hostDirectives: [
    {
      directive: RouterLinkActive,
      inputs: ['routerLinkActiveOptions', 'ariaCurrentWhenActive', 'routerLinkActive'],
      outputs: ['isActiveChange'],
    },
  ],
})
export class FlowbiteRouterLinkActiveDirective {
  private readonly ariaCurrentValue: boolean = true;

  /**
   * `RouterLinkActive` directive
   */
  public routerLinkActive = inject(RouterLinkActive);

  /**
   * Updated value when the user is on the same page as routerLinkActive value
   */
  private _isActive = signal<boolean>(this.routerLinkActive.isActive);

  /**
   * Getter for _isActive
   */
  public get isActive(): Signal<boolean> {
    return this._isActive.asReadonly();
  }

  /**
   * Set the RouterLinkActive's ariaCurrentWhenActive to the value passed to the component (via this Directive).
   */
  constructor() {
    this.routerLinkActive.ariaCurrentWhenActive = this.ariaCurrentValue;
  }

  /**
   * Update _isActive when `RouterLinkActive`'s isActive update
   */
  public onIsActiveChange(): void {
    this._isActive.set(this.routerLinkActive.isActive);
  }
}
