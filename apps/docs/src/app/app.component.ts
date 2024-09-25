import {
  IconComponent,
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarIconButtonComponent,
  NavbarItemComponent,
  NavbarToggleComponent,
} from 'flowbite-angular';

import { Location } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgDocRootComponent, NgDocSidebarComponent, NgDocThemeToggleComponent } from '@ng-doc/app';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    NgDocRootComponent,
    NgDocSidebarComponent,
    NgDocThemeToggleComponent,
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
  protected readonly location = inject(Location);

  @HostBinding('attr.data-ng-doc-is-landing')
  get isLandingPage(): boolean {
    return this.location.path() === '/new-docs';
  }
}
