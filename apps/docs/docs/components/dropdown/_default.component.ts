import { Button } from 'flowbite-angular/button';
import { Dropdown, DropdownContent, DropdownItem } from 'flowbite-angular/dropdown';
import { Icon } from 'flowbite-angular/icon';
import { chevronDown } from 'flowbite-angular/icon/outline/arrows';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';

@Component({
  imports: [Button, Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger, Icon],
  providers: [provideIcons({ chevronDown })],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
