import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import {
  AccordionPageComponent,
  AlertPageComponent,
  BadgePageComponent,
  BreadcrumbPageComponent,
  ButtonPageComponent,
  DashboardPageComponent,
  ModalPageComponent,
  SidebarPageComponent,
  DropdownPageComponent
} from '../pages';

const routes: Route[] = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'accordion',
    component: AccordionPageComponent,
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
    path: 'breadcrumb',
    component: BreadcrumbPageComponent,
  },
  {
    path: 'buttons',
    component: ButtonPageComponent,
  },
  {
    path: 'dropdown',
    component: DropdownPageComponent
  },
  {
    path: 'sidebar',
    component: SidebarPageComponent,
  },
  {
    path: 'modals',
    component: ModalPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
