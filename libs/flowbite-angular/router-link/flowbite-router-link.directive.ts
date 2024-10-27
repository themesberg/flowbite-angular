import { Directive, inject, model } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

/**
 * Wrapping directive over RouterLink.
 *
 * @see `RouterLink`
 */
@Directive({
  standalone: true,
  selector: '[flowbiteRouterLink]',
  host: {
    '(click)': 'onClick()',
  },
  hostDirectives: [
    {
      directive: RouterLink,
      inputs: [
        'target',
        'queryParams',
        'fragment',
        'queryParamsHandling',
        'state',
        'info',
        'relativeTo',
        'preserveFragment',
        'skipLocationChange',
        'replaceUrl',
        'routerLink',
      ],
      outputs: [],
    },
  ],
})
export class FlowbiteRouterLinkDirective {
  public readonly router = inject(Router);
  public readonly routerLink = inject(RouterLink);

  public href = model<string>();

  onClick() {
    const hrefValue = this.href();

    if (hrefValue) {
      this.router.navigateByUrl(hrefValue);
    }
  }
}
