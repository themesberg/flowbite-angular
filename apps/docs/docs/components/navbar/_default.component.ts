import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarToggle,
} from 'flowbite-angular/navbar';

import { Component } from '@angular/core';

@Component({
  imports: [Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarToggle],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
