// Import with relative path since it's not in node_modules and we need to import package.json in order to get version
// eslint-disable-next-line @nx/enforce-module-boundaries
import flowbiteAngularPackageJson from '../../../../libs/flowbite-angular/package.json';

import { BadgeComponent } from 'flowbite-angular/badge';
import { IconComponent } from 'flowbite-angular/icon';
import {
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarIconButtonComponent,
  NavbarItemComponent,
  NavbarToggleComponent,
} from 'flowbite-angular/navbar';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';
import { FlowbiteRouterLinkActiveDirective } from 'flowbite-angular/router-link-active';
import { ScrollTopComponent } from 'flowbite-angular/scroll-top';

import { Location } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgDocRootComponent,
  NgDocSearchComponent,
  NgDocSidebarComponent,
  NgDocSidebarService,
  NgDocThemeToggleComponent,
} from '@ng-doc/app';

@Component({
  imports: [
    RouterOutlet,
    NgDocRootComponent,
    NgDocSidebarComponent,
    NgDocThemeToggleComponent,
    NgDocSearchComponent,
    IconComponent,
    NavbarComponent,
    NavbarContentComponent,
    NavbarItemComponent,
    NavbarBrandComponent,
    NavbarToggleComponent,
    NavbarIconButtonComponent,
    FlowbiteRouterLinkDirective,
    FlowbiteRouterLinkActiveDirective,
    BadgeComponent,
    ScrollTopComponent,
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
