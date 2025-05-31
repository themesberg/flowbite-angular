// Import with relative path since it's not in node_modules and we need to import package.json in order to get version
// eslint-disable-next-line @nx/enforce-module-boundaries
import flowbiteAngularPackageJson from '../../../../libs/flowbite-angular/package.json';

import { FlowbiteBadgeComponent } from 'flowbite-angular/badge';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { bars } from 'flowbite-angular/icon/outline/general';
import { discord, github, youtube } from 'flowbite-angular/icon/solid/brands';
import {
  FlowbiteNavbarBrandComponent,
  FlowbiteNavbarComponent,
  FlowbiteNavbarContentComponent,
  FlowbiteNavbarIconItemComponent,
  FlowbiteNavbarItemComponent,
  FlowbiteNavbarToggleComponent,
} from 'flowbite-angular/navbar';
import {
  FlowbiteThemeDirective,
  FlowbiteThemeToggleComponent,
} from 'flowbite-angular/theme-toggle';

import { Location } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  NgDocRootComponent,
  NgDocSearchComponent,
  NgDocSidebarComponent,
  NgDocSidebarService,
  NgDocThemeToggleComponent,
} from '@ng-doc/app';
import { provideIcons } from '@ng-icons/core';

@Component({
  providers: [provideIcons({ github, discord, youtube, bars })],
  imports: [
    RouterOutlet,
    NgDocRootComponent,
    NgDocSidebarComponent,
    NgDocThemeToggleComponent,
    NgDocSearchComponent,
    FlowbiteNavbarComponent,
    FlowbiteNavbarBrandComponent,
    FlowbiteNavbarItemComponent,
    FlowbiteNavbarIconItemComponent,
    FlowbiteNavbarContentComponent,
    FlowbiteNavbarToggleComponent,
    FlowbiteBadgeComponent,
    FlowbiteThemeDirective,
    FlowbiteThemeToggleComponent,
    RouterLink,
    FlowbiteIconComponent,
  ],
  hostDirectives: [],
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
