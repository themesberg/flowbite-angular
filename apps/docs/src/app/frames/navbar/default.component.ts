import { NavbarComponent, NavbarContentComponent, NavbarItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-navbar-default',
  standalone: true,
  imports: [NavbarComponent, NavbarItemComponent, NavbarContentComponent],
  templateUrl: '../../../assets/examples/navbar/default.component.html',
})
export class FlowbiteFrameNavbarDefaultComponent {}
