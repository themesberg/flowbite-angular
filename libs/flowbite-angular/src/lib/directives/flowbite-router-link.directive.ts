import routerLinkInputs from '../utils/directives/inputs/router-link.inputs';
import routerLinkOutputs from '../utils/directives/outputs/router-link.output';

import { Directive, HostListener, inject, model } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

/**
 * Wrapping directive over RouterLink.
 *
 * @see `RouterLink`
 */
@Directive({
  standalone: true,
  selector: '[flowbiteRouterLink]',
  hostDirectives: [
    {
      directive: RouterLink,
      inputs: routerLinkInputs,
      outputs: routerLinkOutputs,
    },
  ],
})
export class FlowbiteRouterLinkDirective {
  public readonly router = inject(Router);
  public readonly routerLink = inject(RouterLink);

  public href = model<string>();

  @HostListener('click') onClick() {
    const hrefValue = this.href();

    if (hrefValue) {
      this.router.navigateByUrl(hrefValue);
    }
  }
}
