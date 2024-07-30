import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionPanelStateService,
  AccordionStateService,
  AccordionTitleComponent,
  DarkThemeToggleComponent,
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarItemComponent,
  NavbarToggleComponent,
  ScrollTopComponent,
  SidebarStateService,
  SidebarToggleComponent,
} from 'flowbite-angular';
import { DDREService } from 'flowbite-angular/ddre';

import type { AfterViewInit } from '@angular/core';
import { Component, EnvironmentInjector, Inject, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    NavbarBrandComponent,
    NavbarContentComponent,
    NavbarItemComponent,
    DarkThemeToggleComponent,
    NavbarToggleComponent,
    SidebarToggleComponent,
    ScrollTopComponent,
  ],
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
  providers: [SidebarStateService, AccordionPanelStateService, AccordionStateService],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { ngSkipHydration: 'true' },
})
export class AppComponent implements AfterViewInit {
  @ViewChild('azerty', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  constructor(
    @Inject(DDREService) protected DDREEngineService: DDREService,
    @Inject(EnvironmentInjector) protected environmentInjector: EnvironmentInjector,
    @Inject(Injector) protected injector: Injector,
  ) {}

  ngAfterViewInit(): void {
    this.DDREEngineService.generateString(
      {
        component: AccordionComponent,
        content: {
          component: AccordionPanelComponent,
          content: [
            {
              component: AccordionTitleComponent,
              content: 'hello world !',
            },
            { component: AccordionContentComponent, content: 'aze' },
          ],
        },
      },
      this.vcr,
      this.injector,
    );
  }
}
