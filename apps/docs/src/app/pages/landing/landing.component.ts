import { ButtonComponent } from 'flowbite-angular/button';
import { IconComponent } from 'flowbite-angular/icon';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';

import { Component, inject } from '@angular/core';
import { NgDocThemeService } from '@ng-doc/app/services/theme';

@Component({
  selector: 'flowbite-landing',
  standalone: true,
  imports: [IconComponent, ButtonComponent, FlowbiteRouterLinkDirective],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  protected readonly themeService = inject(NgDocThemeService);

  public setTheme(id: 'light' | 'dark'): void {
    this.themeService.set(id);
  }
}
