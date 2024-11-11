import { DropdownComponent, DropdownItemComponent } from 'flowbite-angular/dropdown';
import {
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarItemComponent,
} from 'flowbite-angular/navbar';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-navbar-dropdown',
  standalone: true,
  imports: [
    NavbarComponent,
    NavbarContentComponent,
    NavbarBrandComponent,
    NavbarItemComponent,
    DropdownComponent,
    DropdownItemComponent,
  ],
  templateUrl: './_dropdown.component.html',
})
export class FlowbiteDropdownComponent {}
