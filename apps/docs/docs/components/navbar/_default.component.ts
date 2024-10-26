import { NavbarComponent, NavbarContentComponent, NavbarItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-navbar-default',
  standalone: true,
  imports: [NavbarComponent, NavbarItemComponent, NavbarContentComponent],
  template: `
    <flowbite-navbar [isFixed]="true" [isOpen]="true">
      <flowbite-navbar-content>
        <flowbite-navbar-item>Hello world!</flowbite-navbar-item>
      </flowbite-navbar-content>
    </flowbite-navbar>
  `,
})
export class FlowbiteDefaultComponent {}
