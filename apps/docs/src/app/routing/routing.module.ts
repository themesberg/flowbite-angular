import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import {
  AlertPageComponent,
  BadgePageComponent,
  DashboardPageComponent,
  SidebarPageComponent,
} from '../pages';

const routes: Route[] = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'alerts',
    component: AlertPageComponent,
  },
  {
    path: 'badges',
    component: BadgePageComponent,
  },
  {
    path: 'sidebar',
    component: SidebarPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
