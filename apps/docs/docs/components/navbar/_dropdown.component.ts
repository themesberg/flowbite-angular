import { NavbarComponent, NavbarContentComponent, NavbarBrandComponent, NavbarItemComponent, DropdownComponent, DropdownItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-navbar-dropdown',
  standalone: true,
  imports: [NavbarComponent, NavbarContentComponent, NavbarBrandComponent, NavbarItemComponent, DropdownComponent, DropdownItemComponent],
  template: `
<flowbite-navbar [isFixed]="true" [isOpen]="true">
  <flowbite-navbar-content>
    <flowbite-navbar-brand>
      Flowbite
    </flowbite-navbar-brand>

    <flowbite-navbar-item>Hello world!</flowbite-navbar-item>

    <flowbite-dropdown label="Settings">
      <flowbite-dropdown-item>
        Profile
      </flowbite-dropdown-item>
      <flowbite-dropdown-item>
        Billing
      </flowbite-dropdown-item>
      <flowbite-dropdown-item>
        App settings
      </flowbite-dropdown-item>
    </flowbite-dropdown>
  </flowbite-navbar-content>
</flowbite-navbar>
  `
})
export class FlowbiteDropdownComponent {}
