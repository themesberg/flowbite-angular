import { routerLinkActiveInputs } from '../utils/directive.input.util';
import { routerLinkActiveOutputs } from '../utils/directive.output.util';

import type { Signal } from '@angular/core';
import { Directive, HostListener, inject, signal } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

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

  constructor() {
    this.routerLinkActive.ariaCurrentWhenActive = this.ariaCurrentValue;
  }

  @HostListener('isActiveChange') onIsActiveChange(): void {
    this._isActive.set(this.routerLinkActive.isActive);
  }
}
