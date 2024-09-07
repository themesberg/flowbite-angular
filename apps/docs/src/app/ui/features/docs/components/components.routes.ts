import { AccordionPageComponent } from './accordion-page/accordion-page.component';
import { AlertPageComponent } from './alert-page/alert-page.component';
import { BadgePageComponent } from './badge-page/badge-page.component';
import { BreadcrumbPageComponent } from './breadcrumb-page/breadcrumb-page.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { DropdownPageComponent } from './dropdown-page/dropdown-page.component';
import { IndicatorPageComponent } from './indicator-page/indicator-page.component';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'accordion',
    component: AccordionPageComponent,
    title: 'Components - Accordion',
  },
  {
    path: 'alert',
    component: AlertPageComponent,
    title: 'Components - Alert',
  },
  {
    path: 'badge',
    component: BadgePageComponent,
    title: 'Components - Badge',
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbPageComponent,
    title: 'Components - Breadcrumb',
  },
  {
    path: 'button',
    component: ButtonPageComponent,
    title: 'Components - Button',
  },
  {
    path: 'dropdown',
    component: DropdownPageComponent,
    title: 'Components - Dropdown',
  },
  {
    path: 'indicator',
    component: IndicatorPageComponent,
    title: 'Components - Indicator',
  },
  {
    path: 'modal',
    component: ModalPageComponent,
    title: 'Components - Modal',
  },
  {
    path: 'navbar',
    component: NavbarPageComponent,
    title: 'Components - Navbar',
  },
  {
    path: 'sidebar',
    component: SidebarPageComponent,
    title: 'Components - Sidebar',
  },
] as Routes;
