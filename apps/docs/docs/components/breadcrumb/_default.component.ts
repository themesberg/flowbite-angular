import {
  FlowbiteBreadcrumbComponent,
  FlowbiteBreadcrumbItemComponent,
} from 'flowbite-angular/breadcrumb';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { home } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [FlowbiteBreadcrumbComponent, FlowbiteBreadcrumbItemComponent, FlowbiteIconComponent],
  providers: [provideIcons({ home })],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3',
  },
})
export class FlowbiteDefaultComponent {}
