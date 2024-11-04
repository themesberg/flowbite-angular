import { BadgeComponent } from 'flowbite-angular/badge';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-link',
  standalone: true,
  imports: [BadgeComponent],
  template: `
    <flowbite-badge routerLink="#">Default</flowbite-badge>
    <flowbite-badge
      routerLink="#"
      color="primary">
      Primary
    </flowbite-badge>
    <flowbite-badge
      routerLink="#"
      color="blue">
      Blue
    </flowbite-badge>
    <flowbite-badge
      routerLink="#"
      color="red">
      Red
    </flowbite-badge>
    <flowbite-badge
      routerLink="#"
      color="green">
      Green
    </flowbite-badge>
    <flowbite-badge
      routerLink="#"
      color="yellow">
      Yellow
    </flowbite-badge>
    <flowbite-badge
      routerLink="#"
      color="indigo">
      Indigo
    </flowbite-badge>
    <flowbite-badge
      routerLink="#"
      color="purple">
      Purple
    </flowbite-badge>
    <flowbite-badge
      routerLink="#"
      color="pink">
      Pink
    </flowbite-badge>
  `,
})
export class FlowbiteLinkComponent {}
