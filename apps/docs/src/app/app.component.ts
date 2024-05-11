import { components } from './common/components';

import { Component } from '@angular/core';
import {
  DarkThemeToggleComponent,
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarItemComponent,
} from 'flowbite-angular';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from 'flowbite-angular';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    NavbarBrandComponent,
    NavbarContentComponent,
    NavbarItemComponent,
    DarkThemeToggleComponent,
  ],
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  components = components;

  constructor(protected readonly sidebarService: SidebarService) {}
}
