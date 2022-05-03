import { Component } from '@angular/core';
import { SidebarService } from 'flowbite-angular';

import { routes } from './routing/routes';

@Component({
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  routes = routes;

  constructor(public readonly sidebarService: SidebarService) {}
}
