import {
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarItemComponent,
} from 'flowbite-angular/navbar';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-navbar-brand',
  standalone: true,
  imports: [NavbarComponent, NavbarItemComponent, NavbarContentComponent, NavbarBrandComponent],
  templateUrl: './_brand.component.html',
})
export class FlowbiteBrandComponent {}
