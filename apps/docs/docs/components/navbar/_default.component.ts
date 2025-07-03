import { Icon } from 'flowbite-angular/icon';
import { bars } from 'flowbite-angular/icon/outline/general';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarToggle,
} from 'flowbite-angular/navbar';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarToggle, Icon],
  providers: [provideIcons({ bars })],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
