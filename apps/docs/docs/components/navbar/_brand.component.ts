import { NavbarComponent, NavbarContentComponent, NavbarItemComponent, NavbarBrandComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-navbar-brand',
  standalone: true,
  imports: [NavbarComponent, NavbarItemComponent, NavbarContentComponent, NavbarBrandComponent],
  template: `
<flowbite-navbar [isFixed]="true" [isOpen]="true">
  <flowbite-navbar-content>
    <flowbite-navbar-brand>
      Flowbite
    </flowbite-navbar-brand>

    <flowbite-navbar-item>
      Home
    </flowbite-navbar-item>
    <flowbite-navbar-item>
      Contacts
    </flowbite-navbar-item>
  </flowbite-navbar-content>
</flowbite-navbar>
  `
})
export class FlowbiteBrandComponent {}
