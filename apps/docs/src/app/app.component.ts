import { Component } from '@angular/core';
import { SidebarService } from 'flowbite-angular';

import { components } from './common';
import { NavbarComponent, SidebarComponent, SidebarItemComponent, SidebarItemGroupComponent } from 'flowbite-angular';

@Component({
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, SidebarItemComponent, SidebarItemGroupComponent],
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  components = components;

  constructor(readonly sidebarService: SidebarService) {}
}
