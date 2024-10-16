import { ButtonComponent, IconComponent } from 'flowbite-angular';

import { Component, inject } from '@angular/core';
import { NgDocThemeService } from '@ng-doc/app/services/theme';

@Component({
  selector: 'flowbite-landing',
  standalone: true,
  imports: [IconComponent, ButtonComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  protected readonly themeService = inject(NgDocThemeService);

  public setTheme(id: 'light' | 'dark'): void {
    this.themeService.set(id);
  }
}
