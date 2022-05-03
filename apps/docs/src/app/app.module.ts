import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlowbiteModule } from 'flowbite-angular';

import 'prismjs';
import 'prismjs/components/prism-xml-doc';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import {
  BadgePageComponent,
  DashboardPageComponent,
  SidebarPageComponent,
} from './pages';
import {
  DemoExampleComponent,
  DemoPageComponent,
  PrismComponent,
} from './common';

const PAGES_COMPONENTS = [
  BadgePageComponent,
  DashboardPageComponent,
  SidebarPageComponent,
];

const COMMON_COMPONENTS = [
  DemoPageComponent,
  DemoExampleComponent,
  PrismComponent,
];

@NgModule({
  declarations: [AppComponent, PAGES_COMPONENTS, COMMON_COMPONENTS],
  imports: [BrowserModule, RoutingModule, FlowbiteModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
