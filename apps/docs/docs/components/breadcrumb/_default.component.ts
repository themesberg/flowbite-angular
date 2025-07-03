import { Breadcrumb, BreadcrumbContent, BreadcrumbItem } from 'flowbite-angular/breadcrumb';
import { Icon } from 'flowbite-angular/icon';
import { chevronRight } from 'flowbite-angular/icon/outline/arrows';
import { home } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [Breadcrumb, BreadcrumbItem, BreadcrumbContent, Icon],
  providers: [provideIcons({ home, chevronRight })],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
