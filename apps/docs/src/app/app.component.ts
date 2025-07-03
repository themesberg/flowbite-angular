// Import with relative path since it's not in node_modules and we need to import package.json in order to get version
// eslint-disable-next-line @nx/enforce-module-boundaries
import flowbiteAngularPackageJson from '../../../../libs/flowbite-angular/package.json';

import { Badge } from 'flowbite-angular/badge';
import { Icon } from 'flowbite-angular/icon';
import { bars } from 'flowbite-angular/icon/outline/general';
import { discord, github, youtube } from 'flowbite-angular/icon/solid/brands';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarIconItem,
  NavbarItem,
  NavbarToggle,
} from 'flowbite-angular/navbar';
import { Theme, ThemeToggle } from 'flowbite-angular/theme-toggle';

import { Location } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  NgDocRootComponent,
  NgDocSearchComponent,
  NgDocSidebarComponent,
  NgDocSidebarService,
} from '@ng-doc/app';
import { provideIcons } from '@ng-icons/core';

@Component({
  providers: [provideIcons({ github, discord, youtube, bars })],
  imports: [
    RouterOutlet,
    NgDocRootComponent,
    NgDocSidebarComponent,
    NgDocSearchComponent,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarIconItem,
    NavbarItem,
    NavbarToggle,
    Badge,
    ThemeToggle,
    RouterLink,
    Icon,
  ],
  hostDirectives: [
    {
      directive: Theme,
    },
  ],
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
  host: {
    '[attr.data-ng-doc-is-landing]': 'isLandingPage',
  },
})
export class AppComponent {
  protected readonly sidebarService = inject(NgDocSidebarService);
  protected readonly location = inject(Location);

  get isLandingPage(): boolean {
    return this.location.path() === '';
  }

  public readonly currentYear = computed(() => new Date().getFullYear());
  public readonly flowbiteAngularVersion = computed(() => flowbiteAngularPackageJson.version);
}
