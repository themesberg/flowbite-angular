import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import {
  AccordionPageComponent,
  AlertPageComponent,
  BadgePageComponent,
  BreadcrumbPageComponent,
  ButtonPageComponent,
  DashboardPageComponent,
  FormsPageComponent,
  IndicatorPageComponent,
  ModalPageComponent,
  SidebarPageComponent,
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
    path: 'indicators',
    component: IndicatorPageComponent,
  },
  {
    path: 'forms',
    component: FormsPageComponent,
  },
  {
    path: 'sidebar',
    component: SidebarPageComponent,
  },
  {
    path: 'modals',
    component: ModalPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
