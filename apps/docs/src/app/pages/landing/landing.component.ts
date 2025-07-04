import { Button } from 'flowbite-angular/button';
import { Clipboard } from 'flowbite-angular/clipboard';
import { Icon } from 'flowbite-angular/icon';
import { combinator, dev, productHunt, reddit, youtube } from 'flowbite-angular/icon/brand';
import { arrowRight, chevronRight } from 'flowbite-angular/icon/outline/arrows';
import { check, eye } from 'flowbite-angular/icon/outline/general';
import { moon, sun } from 'flowbite-angular/icon/outline/weather';

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgDocThemeService } from '@ng-doc/app/services/theme';
import { provideIcons } from '@ng-icons/core';

@Component({
  selector: 'flowbite-landing',
  providers: [
    provideIcons({
      arrowRight,
      reddit,
      dev,
      productHunt,
      combinator,
      youtube,
      sun,
      moon,
      check,
      eye,
      chevronRight,
    }),
  ],
  imports: [Button, Icon, Clipboard, RouterLink],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  protected readonly themeService = inject(NgDocThemeService);

  public setTheme(id: 'light' | 'dark'): void {
    this.themeService.set(id);
  }
}
