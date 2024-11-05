import { BadgeComponent } from 'flowbite-angular/badge';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-link',
  standalone: true,
  imports: [BadgeComponent, FlowbiteRouterLinkDirective],
  template: `
    <flowbite-badge
      flowbiteRouterLink
      routerLink="./"
      fragment="badge-as-link">
      Default
    </flowbite-badge>
    <flowbite-badge
      flowbiteRouterLink
      routerLink="./"
      fragment="badge-as-link"
      color="primary">
      Primary
    </flowbite-badge>
    <flowbite-badge
      flowbiteRouterLink
      routerLink="./"
      fragment="badge-as-link"
      color="blue">
      Blue
    </flowbite-badge>
    <flowbite-badge
      flowbiteRouterLink
      routerLink="./"
      fragment="badge-as-link"
      color="red">
      Red
    </flowbite-badge>
    <flowbite-badge
      flowbiteRouterLink
      routerLink="./"
      fragment="badge-as-link"
      color="green">
      Green
    </flowbite-badge>
    <flowbite-badge
      flowbiteRouterLink
      routerLink="./"
      fragment="badge-as-link"
      color="yellow">
      Yellow
    </flowbite-badge>
    <flowbite-badge
      flowbiteRouterLink
      routerLink="./"
      fragment="badge-as-link"
      color="indigo">
      Indigo
    </flowbite-badge>
    <flowbite-badge
      flowbiteRouterLink
      routerLink="./"
      fragment="badge-as-link"
      color="purple">
      Purple
    </flowbite-badge>
    <flowbite-badge
      flowbiteRouterLink
      routerLink="./"
      fragment="badge-as-link"
      color="pink">
      Pink
    </flowbite-badge>
  `,
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteLinkComponent {}
