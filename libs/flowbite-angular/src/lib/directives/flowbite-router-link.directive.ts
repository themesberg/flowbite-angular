import { routerLinkInputs } from '../utils/directive.input.util';
import { routerLinkOutputs } from '../utils/directive.output.util';

import { Directive, HostListener, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
  public static flowbiteRouterLinkInputs: string[] = ['href'];
  public static flowbiteRouterLinkOutputs: string[] = [];

  public readonly router = inject(Router);
  public readonly routerLink = inject(RouterLink);

  public href = input<string>();

  @HostListener('click') onClick() {
    const hrefValue = this.href();

    if (hrefValue) {
      this.router.navigateByUrl(hrefValue);
    }
  }
}
