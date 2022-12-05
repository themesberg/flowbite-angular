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
} from './pages';
import {
  DemoExampleComponent,
  DemoPageComponent,
  PrismComponent,
} from './common';
import { AvatarPageComponent } from './pages/avatar-page/avatar-page.component';
import {MarkdownModule} from "ngx-markdown";

const PAGES_COMPONENTS = [
  AccordionPageComponent,
  AlertPageComponent,
  BadgePageComponent,
  DashboardPageComponent,
  SidebarPageComponent,
  BreadcrumbPageComponent,
  ButtonPageComponent,
];

const COMMON_COMPONENTS = [
  DemoPageComponent,
  DemoExampleComponent,
  PrismComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    PAGES_COMPONENTS,
    COMMON_COMPONENTS,
    AvatarPageComponent,
  ],
    imports: [BrowserModule, RoutingModule, FlowbiteModule, ScullyLibModule, MarkdownModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
