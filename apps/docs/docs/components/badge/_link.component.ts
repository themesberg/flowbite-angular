import { BadgeComponent } from 'flowbite-angular/badge';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-link',
  imports: [BadgeComponent, FlowbiteRouterLinkDirective],
  templateUrl: './_link.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteLinkComponent {}
