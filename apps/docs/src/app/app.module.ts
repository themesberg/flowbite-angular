import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlowbiteModule } from 'flowbite-angular';
import { ScullyLibModule } from '@scullyio/ng-lib';

import 'prismjs';
import 'prismjs/components/prism-xml-doc';
import 'prismjs/components/prism-typescript';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import {
  AccordionPageComponent,
  AlertPageComponent,
  BadgePageComponent,
  DashboardPageComponent,
  SidebarPageComponent,
  BreadcrumbPageComponent,
  ButtonPageComponent,
  ModalPageComponent,
  IndicatorPageComponent,
} from './pages';
import {
  DemoExampleComponent,
  DemoPageComponent,
  PrismComponent,
} from './common';

const PAGES_COMPONENTS = [
  AccordionPageComponent,
  AlertPageComponent,
  BadgePageComponent,
  DashboardPageComponent,
  SidebarPageComponent,
  ModalPageComponent,
  BreadcrumbPageComponent,
  ButtonPageComponent,
  IndicatorPageComponent
];

const COMMON_COMPONENTS = [
  DemoPageComponent,
  DemoExampleComponent,
  PrismComponent,
];

@NgModule({
  declarations: [AppComponent, PAGES_COMPONENTS, COMMON_COMPONENTS],
  imports: [BrowserModule, RoutingModule, FlowbiteModule, ScullyLibModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
