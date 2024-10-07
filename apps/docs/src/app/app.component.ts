import {
  IconComponent,
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarIconButtonComponent,
  NavbarItemComponent,
  NavbarToggleComponent,
} from 'flowbite-angular';

import { Location, NgIf } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgDocRootComponent, NgDocSidebarComponent, NgDocSidebarService, NgDocThemeToggleComponent, NgDocSearchComponent } from '@ng-doc/app';

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
  ],
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly sidebarService = inject(NgDocSidebarService);
  protected readonly location = inject(Location);

  @HostBinding('attr.data-ng-doc-is-landing')
  get isLandingPage(): boolean {
    return this.location.path() === '';
  }
}
