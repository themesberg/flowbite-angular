import {
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarItemComponent,
  NavbarToggleComponent,
} from 'flowbite-angular/navbar';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-navbar-responsive',
  imports: [
    NavbarComponent,
    NavbarContentComponent,
    NavbarItemComponent,
    NavbarBrandComponent,
    NavbarToggleComponent,
  ],
  templateUrl: './_responsive.component.html',
})
export class FlowbiteResponsiveComponent {}
