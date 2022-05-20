import { Component } from '@angular/core';
import { SidebarService } from 'flowbite-angular';

import { components } from './common';

@Component({
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  components = components;

  constructor(readonly sidebarService: SidebarService) {}
}
