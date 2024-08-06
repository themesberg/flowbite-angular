import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BreadcrumbComponent, BreadcrumbItemComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-breadcrumb-default',
  standalone: true,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent, FlowbiteFrameDisplayComponent, IconComponent],
  templateUrl: '../../../assets/examples/breadcrumb/default.component.html',
})
export class FlowbiteFrameBreadcrumbDefaultComponent {}
