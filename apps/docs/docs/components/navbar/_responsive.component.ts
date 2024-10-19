import { NavbarComponent, NavbarContentComponent, NavbarItemComponent, NavbarBrandComponent, NavbarToggleComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-navbar-responsive',
  standalone: true,
  imports: [NavbarComponent, NavbarContentComponent, NavbarItemComponent, NavbarBrandComponent, NavbarToggleComponent],
  template: `
<flowbite-navbar>
  <flowbite-navbar-brand>
    Flowbite
  </flowbite-navbar-brand>

  <flowbite-navbar-toggle />

  <flowbite-navbar-content>
    <flowbite-navbar-item>
      Home
    </flowbite-navbar-item>
    <flowbite-navbar-item>
      Pricing
    </flowbite-navbar-item>
    <flowbite-navbar-item>
      Contacts
    </flowbite-navbar-item>
  </flowbite-navbar-content>
</flowbite-navbar>
  `
})
export class FlowbiteResponsiveComponent {}
