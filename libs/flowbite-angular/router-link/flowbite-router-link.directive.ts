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
  /**
   * `Router` service
   */
  public readonly router = inject(Router);
  /**
   * `RouterLink` directive
   */
  public readonly routerLink = inject(RouterLink);

  /**
   * @todo Verify utility
   */
  public href = model<string>();

  /**
   * @todo Verify utility
   */
  onClick() {
    const hrefValue = this.href();

    if (hrefValue) {
      this.router.navigateByUrl(hrefValue);
    }
  }
}
