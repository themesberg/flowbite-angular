import { BreadcrumbComponent, BreadcrumbItemComponent } from 'flowbite-angular/breadcrumb';
import { IconComponent } from 'flowbite-angular/icon';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-breadcrumb-default',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    IconComponent,
    FlowbiteRouterLinkDirective,
  ],
  templateUrl: './_default.component.html',
})
export class FlowbiteDefaultComponent {}
