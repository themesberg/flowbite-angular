import {
  DarkThemeToggleComponent,
  IconComponent,
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarItemComponent,
  NavbarToggleComponent,
  ScrollTopComponent,
  SidebarStateService,
  SidebarToggleComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    NavbarBrandComponent,
    NavbarContentComponent,
    NavbarItemComponent,
    DarkThemeToggleComponent,
    NavbarToggleComponent,
    SidebarToggleComponent,
    ScrollTopComponent,
    IconComponent,
  ],
  selector: 'flowbite-ui',
  templateUrl: './ui.component.html',
  providers: [SidebarStateService, IconComponent],
})
export class UiComponent {}
