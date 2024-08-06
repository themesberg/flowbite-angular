import { FlowbiteIFrameComponent } from './iframe.component';

import type { FlowbiteTheme, ThemeState } from 'flowbite-angular';
import { ButtonComponent, GlobalSignalStoreService, IconComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import type { AfterViewInit } from '@angular/core';
import {
  afterNextRender,
  Component,
  effect,
  inject,
  Injector,
  input,
  numberAttribute,
  signal,
  untracked,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'flowbite-iframe-wrapper',
  standalone: true,
  imports: [FlowbiteIFrameComponent, ButtonComponent, NgClass, IconComponent],
  template: `
    <div
      class="flex flex-col grow rounded-t-xl"
      [ngClass]="{
        'bg-white': contentThemeMode() === 'light',
        'bg-gray-900': contentThemeMode() === 'dark',
      }">
      <div
        class="flex flex-row justify-between items-center rounded-t-xl p-6 border-b bg-gray-50 border-b-gray-200 dark:bg-gray-800 dark:border-b-gray-700 dark:text-gray-400">
        <span>
          <flowbite-button
            color="light"
            size="sm">
            <flowbite-icon
              svgIcon="solid:github"
              class="mr-2 w-4 h-4" />
            Show on Github
          </flowbite-button>
        </span>
        <span class="hidden gap-2 lg:flex lg:flex-row">
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="iframe.width.set('lg')">
            <flowbite-icon
              svgIcon="outline:desktop-pc"
              class="w-4 h-4" />
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="iframe.width.set('md')">
            <flowbite-icon
              svgIcon="outline:tablet"
              class="w-4 h-4" />
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="iframe.width.set('sm')">
            <flowbite-icon
              svgIcon="outline:mobile-phone"
              class="w-4 h-4" />
          </flowbite-button>
        </span>
        <span class="flex flex-row gap-2">
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="setContentThemeMode('light')">
            <flowbite-icon
              svgIcon="outline:sun"
              class="w-5 h-5" />
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="setContentThemeMode('dark')">
            <flowbite-icon
              svgIcon="outline:moon"
              class="w-5 h-5" />
          </flowbite-button>
        </span>
      </div>
      <flowbite-iframe
        [link]="link()"
        [height]="height()"
        [onLoadAction]="onIframeLoaded"
        width="lg"
        #iframe />
    </div>
  `,
})
export class FlowbiteIFrameWrapperComponent implements AfterViewInit {
  @ViewChild(FlowbiteIFrameComponent)
  protected readonly iframe!: FlowbiteIFrameComponent;

  protected readonly injector = inject(Injector);
  protected readonly themeStateService = inject<GlobalSignalStoreService<ThemeState>>(
    GlobalSignalStoreService<ThemeState>,
  );

  protected contentThemeMode = signal<FlowbiteTheme | undefined>(undefined);

  public link = input.required<string>();
  public githubLink = input<string>();
  public height = input<number, unknown>(150, { transform: numberAttribute });

  public ngAfterViewInit(): void {
    afterNextRender(
      () => {
        effect(
          () => {
            this.contentThemeMode.set(this.themeStateService.select('theme')());

            this.onIframeLoaded();
          },
          { injector: this.injector, allowSignalWrites: true },
        );
      },
      { injector: this.injector },
    );
  }

  protected onIframeLoaded = () => {
    const theme = untracked(() => this.contentThemeMode());

    this.setContentThemeMode(theme || this.themeStateService.select('theme')());
  };

  protected setContentThemeMode(mode: FlowbiteTheme): void {
    this.iframe.setTheme(mode);
    this.contentThemeMode.set(mode);
  }
}
