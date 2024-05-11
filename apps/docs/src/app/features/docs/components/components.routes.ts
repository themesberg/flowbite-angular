import { AccordionPageComponent } from './accordion-page/accordion-page.component';
import { AlertPageComponent } from './alert-page/alert-page.component';
import { BadgePageComponent } from './badge-page/badge-page.component';
import { BreadcrumbPageComponent } from './breadcrumb-page/breadcrumb-page.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DropdownPageComponent } from './dropdown-page/dropdown-page.component';
import { FloatingLabelPageComponent } from './floating-label-page/floating-label-page.component';
import { FormsPageComponent } from './forms-page/forms-page.component';
import { IndicatorPageComponent } from './indicator-page/indicator-page.component';
import { InputFieldPageComponent } from './input-field-page/input-field-page.component';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';

import { Routes } from '@angular/router';

export default [
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
] as Routes;
