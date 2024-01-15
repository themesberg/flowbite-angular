import { Route } from '@angular/router';

import {
  AccordionPageComponent,
  AlertPageComponent,
  BadgePageComponent,
  BreadcrumbPageComponent,
  ButtonPageComponent,
  DashboardPageComponent,
  DropdownPageComponent,
  FloatingLabelPageComponent,
  FormsPageComponent,
  IndicatorPageComponent,
  InputFieldPageComponent,
  ModalPageComponent,
  SidebarPageComponent,
} from './pages';

export const appRoutes: Route[] = [
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
    component: DropdownPageComponent,
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
    path: 'input-field',
    component: InputFieldPageComponent,
  },
  {
    path: 'floating-label',
    component: FloatingLabelPageComponent,
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
