import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from 'flowbite-angular';

import { components } from './common';
import {
  NavbarComponent,
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
  DarkThemeToggleComponent,
} from 'flowbite-angular';
import { NgFor } from '@angular/common';

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
