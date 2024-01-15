import { Route } from '@angular/router';

import { AccordionPageComponent } from './pages/accordion-page/accordion-page.component';
import { AlertPageComponent } from './pages/alert-page/alert-page.component';
import { BadgePageComponent } from './pages/badge-page/badge-page.component';
import { BreadcrumbPageComponent } from './pages/breadcrumb-page/breadcrumb-page.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DropdownPageComponent } from './pages/dropdown-page/dropdown-page.component';
import { FloatingLabelPageComponent } from './pages/floating-label-page/floating-label-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { IndicatorPageComponent } from './pages/indicator-page/indicator-page.component';
import { InputFieldPageComponent } from './pages/input-field-page/input-field-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { SidebarPageComponent } from './pages/sidebar-page/sidebar-page.component';

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
