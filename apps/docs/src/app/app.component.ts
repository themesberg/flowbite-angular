import {
  FlowbiteRouterLinkActiveDirective,
  FlowbiteRouterLinkDirective,
  IconComponent,
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarIconButtonComponent,
  NavbarItemComponent,
  NavbarToggleComponent,
} from 'flowbite-angular';

import { Location, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgDocRootComponent,
  NgDocSearchComponent,
  NgDocSidebarComponent,
  NgDocSidebarService,
  NgDocThemeToggleComponent,
} from '@ng-doc/app';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
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
}
