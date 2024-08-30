import {
  DarkThemeToggleComponent,
  IconComponent,
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarIconButtonComponent,
  NavbarItemComponent,
  NavbarToggleComponent,
  ScrollTopComponent,
  SidebarStateService,
  SidebarToggleComponent,
} from 'flowbite-angular';

import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    NgIf,
    NavbarComponent,
    RouterOutlet,
    NavbarBrandComponent,
    NavbarContentComponent,
    NavbarItemComponent,
    DarkThemeToggleComponent,
    NavbarToggleComponent,
    NavbarIconButtonComponent,
    SidebarToggleComponent,
    ScrollTopComponent,
    IconComponent,
  ],
  selector: 'flowbite-ui',
  templateUrl: './ui.component.html',
  providers: [SidebarStateService, IconComponent],
})
export class UiComponent {
  protected router = inject(Router);
}
