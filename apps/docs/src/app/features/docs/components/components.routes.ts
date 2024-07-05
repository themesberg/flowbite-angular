import { AccordionPageComponent } from './accordion-page/accordion-page.component';
import { AlertPageComponent } from './alert-page/alert-page.component';
import { BadgePageComponent } from './badge-page/badge-page.component';
import { BreadcrumbPageComponent } from './breadcrumb-page/breadcrumb-page.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { DropdownPageComponent } from './dropdown-page/dropdown-page.component';
import { IndicatorPageComponent } from './indicator-page/indicator-page.component';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'accordion',
    component: AccordionPageComponent,
  },
  {
    path: 'alert',
    component: AlertPageComponent,
  },
  {
    path: 'badge',
    component: BadgePageComponent,
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbPageComponent,
  },
  {
    path: 'button',
    component: ButtonPageComponent,
  },
  {
    path: 'dropdown',
    component: DropdownPageComponent,
  },
  {
    path: 'indicator',
    component: IndicatorPageComponent,
  },
  {
    path: 'sidebar',
    component: SidebarPageComponent,
  },
  {
    path: 'modal',
    component: ModalPageComponent,
  },
] as Routes;
