import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import {
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
