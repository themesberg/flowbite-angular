import { FlowbiteIFrameComponent } from './iframe.component';

import type { FlowbiteTheme, ThemeState } from 'flowbite-angular';
import { ButtonComponent, GlobalSignalStoreService } from 'flowbite-angular';

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
  imports: [FlowbiteIFrameComponent, ButtonComponent, NgClass],
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
            <svg
              class="mr-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99766 1C6.2567 1.0009 4.57283 1.61752 3.24714 2.73958C1.92144 3.86165 1.04038 5.416 0.76149 7.1247C0.482597 8.8334 0.824058 10.585 1.72482 12.0664C2.62559 13.5477 4.02691 14.6622 5.67823 15.2105C6.04254 15.2781 6.17976 15.0523 6.17976 14.8603C6.17976 14.6683 6.17247 14.1117 6.17004 13.5031C4.12992 13.9439 3.69883 12.6422 3.69883 12.6422C3.36609 11.797 2.88521 11.5749 2.88521 11.5749C2.21974 11.1233 2.935 11.1317 2.935 11.1317C3.67211 11.1836 4.0595 11.884 4.0595 11.884C4.71282 12.9984 5.77538 12.676 6.19312 12.4877C6.25869 12.0156 6.44935 11.6944 6.65943 11.5121C5.02976 11.3285 3.31752 10.7031 3.31752 7.90903C3.30742 7.18441 3.57785 6.48366 4.07285 5.95176C3.99756 5.76822 3.74619 5.02685 4.1445 4.01983C4.1445 4.01983 4.76018 3.82423 6.16155 4.76725C7.36355 4.44041 8.63176 4.44041 9.83376 4.76725C11.2339 3.82423 11.8484 4.01983 11.8484 4.01983C12.2479 5.02443 11.9965 5.76581 11.9212 5.95176C12.4178 6.48375 12.6888 7.18572 12.6778 7.91145C12.6778 10.7115 10.9619 11.3285 9.3298 11.5084C9.5921 11.7354 9.82648 12.1786 9.82648 12.8596C9.82648 13.8352 9.81798 14.62 9.81798 14.8603C9.81798 15.0547 9.95034 15.2817 10.3219 15.2105C11.9734 14.6621 13.3749 13.5474 14.2757 12.0659C15.1764 10.5843 15.5177 8.83237 15.2385 7.12351C14.9593 5.41465 14.0778 3.86028 12.7516 2.73841C11.4255 1.61654 9.74125 1.00033 8.00008 1H7.99766Z"
                fill="#1F2A37" />
              <path
                d="M3.44121 11.4698C3.42542 11.506 3.36713 11.5169 3.31977 11.4915C3.27241 11.4662 3.2372 11.4191 3.2542 11.3817C3.2712 11.3442 3.32828 11.3346 3.37564 11.3599C3.423 11.3853 3.45942 11.4336 3.44121 11.4698Z"
                fill="#1F2A37" />
              <path
                d="M3.73874 11.7994C3.71359 11.812 3.68482 11.8156 3.65735 11.8094C3.62988 11.8032 3.60542 11.7877 3.58816 11.7656C3.5408 11.7149 3.53108 11.6449 3.56751 11.6135C3.60394 11.5821 3.66952 11.5966 3.71688 11.6473C3.76424 11.698 3.77517 11.768 3.73874 11.7994Z"
                fill="#1F2A37" />
              <path
                d="M4.02777 12.2184C3.98284 12.2498 3.90633 12.2184 3.86383 12.1556C3.85208 12.1444 3.84273 12.1309 3.83635 12.1159C3.82996 12.101 3.82667 12.0849 3.82667 12.0687C3.82667 12.0525 3.82996 12.0364 3.83635 12.0215C3.84273 12.0065 3.85208 11.993 3.86383 11.9818C3.90876 11.9516 3.98527 11.9818 4.02777 12.0433C4.07027 12.1049 4.07149 12.187 4.02777 12.2184Z"
                fill="#1F2A37" />
              <path
                d="M4.42 12.6241C4.37992 12.6688 4.29856 12.6567 4.23177 12.5963C4.16498 12.536 4.14919 12.4539 4.18927 12.4104C4.22934 12.3669 4.3107 12.379 4.37992 12.4382C4.44914 12.4973 4.4625 12.5807 4.42 12.6241Z"
                fill="#1F2A37" />
              <path
                d="M4.97008 12.8608C4.95187 12.9175 4.86929 12.9429 4.78672 12.9187C4.70414 12.8946 4.64949 12.827 4.66528 12.769C4.68107 12.7111 4.76486 12.6845 4.84865 12.7111C4.93244 12.7376 4.98587 12.8016 4.97008 12.8608Z"
                fill="#1F2A37" />
              <path
                d="M5.57 12.9018C5.57 12.961 5.502 13.0117 5.41457 13.0129C5.32713 13.0141 5.25549 12.9658 5.25549 12.9067C5.25549 12.8475 5.32349 12.7968 5.41092 12.7956C5.49835 12.7944 5.57 12.8415 5.57 12.9018Z"
                fill="#1F2A37" />
              <path
                d="M6.12861 12.8089C6.13954 12.868 6.07882 12.9296 5.99138 12.9441C5.90395 12.9586 5.82745 12.9236 5.81652 12.8656C5.80559 12.8077 5.86874 12.7449 5.95374 12.7292C6.03875 12.7135 6.11768 12.7497 6.12861 12.8089Z"
                fill="#1F2A37" />
            </svg>
            Show on Github
          </flowbite-button>
        </span>
        <span class="hidden gap-2 lg:flex lg:flex-row">
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="iframe.width.set('lg')">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 8.66667H14M6.5 11.3333L6 13.3333L5.33333 14H10.6667L10 13.3333L9.5 11.3333H6.5ZM3.33333 11.3333H12.6667C13.0203 11.3333 13.3594 11.1929 13.6095 10.9428C13.8595 10.6928 14 10.3536 14 10V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V10C2 10.3536 2.14048 10.6928 2.39052 10.9428C2.64057 11.1929 2.97971 11.3333 3.33333 11.3333Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="iframe.width.set('md')">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.99992 12H8.00659M4.66659 14H11.3333C11.6869 14 12.026 13.8595 12.2761 13.6095C12.5261 13.3594 12.6666 13.0203 12.6666 12.6667V3.33333C12.6666 2.97971 12.5261 2.64057 12.2761 2.39052C12.026 2.14048 11.6869 2 11.3333 2H4.66659C4.31296 2 3.97382 2.14048 3.72378 2.39052C3.47373 2.64057 3.33325 2.97971 3.33325 3.33333V12.6667C3.33325 13.0203 3.47373 13.3594 3.72378 13.6095C3.97382 13.8595 4.31296 14 4.66659 14Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="iframe.width.set('sm')">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 12H8.00667M5.33333 14H10.6667C11.0203 14 11.3594 13.8595 11.6095 13.6095C11.8595 13.3594 12 13.0203 12 12.6667V3.33333C12 2.97971 11.8595 2.64057 11.6095 2.39052C11.3594 2.14048 11.0203 2 10.6667 2H5.33333C4.97971 2 4.64057 2.14048 4.39052 2.39052C4.14048 2.64057 4 2.97971 4 3.33333V12.6667C4 13.0203 4.14048 13.3594 4.39052 13.6095C4.64057 13.8595 4.97971 14 5.33333 14Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </flowbite-button>
        </span>
        <span class="flex flex-row gap-2">
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="setContentThemeMode('light')">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"></path>
            </svg>
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            isPill
            (click)="setContentThemeMode('dark')">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
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
