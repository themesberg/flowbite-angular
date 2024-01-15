import { Component } from '@angular/core';
import {
  DarkThemeToggleComponent,
  NavbarComponent,
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
} from 'flowbite-angular';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from 'flowbite-angular';

import { components } from '@flowbite-angular-docs/app/common';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemGroupComponent,
    RouterOutlet,
    DarkThemeToggleComponent,
    NgFor,
  ],
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  components = components;

  constructor(protected readonly sidebarService: SidebarService) {}
}
