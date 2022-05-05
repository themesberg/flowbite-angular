import { Component } from '@angular/core';

import { components } from '../../common';

@Component({
  selector: 'flowbite-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  components = components.filter((component) => !!component.card);
}
