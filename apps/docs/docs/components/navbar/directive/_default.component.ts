import {
  NavbarComponent,
  NavbarContentComponent,
  NavbarItemComponent,
} from 'flowbite-angular/navbar';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-navbar-default',
  imports: [NavbarComponent, NavbarItemComponent, NavbarContentComponent],
  templateUrl: './_default.component.html',
})
export class FlowbiteDefaultComponent {}
