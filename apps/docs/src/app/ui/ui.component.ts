import {
  DarkThemeToggleComponent,
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
  ],
  selector: 'flowbite-ui',
  templateUrl: './ui.component.html',
  providers: [SidebarStateService],
})
export class UiComponent {}
