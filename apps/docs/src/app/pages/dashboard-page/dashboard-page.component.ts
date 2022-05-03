import { Component } from '@angular/core';

import { routes } from '../../routing/routes';

@Component({
  selector: 'flowbite-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  routes = routes.filter((route) => !!route.card);
}
