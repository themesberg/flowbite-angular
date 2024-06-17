import {
  FLOWBITE_SETTINGS_ROUTER_DISPLAY_ERROR,
  FlowbiteLink,
} from '../common';

import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LinkRouter {
  private readonly displayErrorSetting = inject(
    FLOWBITE_SETTINGS_ROUTER_DISPLAY_ERROR,
  );
  private readonly router = inject(Router);

  public async navigate(link?: FlowbiteLink): Promise<boolean> {
    let routerResult = false;

    if (link) {
      if (typeof link === 'string') {
        routerResult = await this.router.navigateByUrl(link);
      } else {
        routerResult = await this.router.navigate(link.commands, link.extras);
      }

      this.showErrorAlert(routerResult);
    }

    return routerResult;
  }

  private showErrorAlert(routerReturnValue: boolean): void {
    if (!routerReturnValue && this.displayErrorSetting) {
      alert('Error while navigating to the link');
    }
  }
}
