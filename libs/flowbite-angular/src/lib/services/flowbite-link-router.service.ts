import type { FlowbiteLink } from '../common';
import { FLOWBITE_SETTINGS_ROUTER_DISPLAY_ERROR } from '../common';

import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FlowbiteLinkRouter {
  private readonly displayErrorSetting = inject(FLOWBITE_SETTINGS_ROUTER_DISPLAY_ERROR);
  private readonly router = inject(Router);

  public async navigate(link?: FlowbiteLink): Promise<boolean> {
    let routerResult = false;

    if (link) {
      const linkString = this.flowbiteLinkToString(link);

      if (this.isRedirectionToAnotherSite(linkString)) {
        window.location.href = linkString;
        return true;
      }

      routerResult = await this.router.navigateByUrl(linkString, {
        onSameUrlNavigation: 'reload',
      });

      this.showErrorAlert(routerResult);
    }

    return routerResult;
  }

  private showErrorAlert(routerReturnValue: boolean): void {
    if (!routerReturnValue && this.displayErrorSetting) {
      alert('Error while navigating to the link');
    }
  }

  private flowbiteLinkToString(link: any[] | string): string {
    if (typeof link === 'string') return link;

    return link.join('');
  }

  private isRedirectionToAnotherSite(link: string): boolean {
    return link.startsWith('http');
  }
}
