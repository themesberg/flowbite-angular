import { IframeCachedSrcDirective } from './iframe-cached-src.directive';

import type { FlowbiteTheme } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  input,
  model,
  numberAttribute,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'flowbite-iframe',
  standalone: true,
  imports: [NgClass, IframeCachedSrcDirective],
  template: `
    <iframe
      flowbiteIframeChachedSrc
      [cachedSrc]="link()"
      class="w-full mx-auto iframe-code"
      [ngClass]="{
        'max-w-md': width() == 'md',
        'max-w-sm': width() === 'sm',
      }"
      frameborder="0"
      loading="lazy"
      (load)="callOnLoadAction()"
      #iframe></iframe>
  `,
})
export class FlowbiteIFrameComponent {
  @ViewChild('iframe', { static: false })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected iframe!: ElementRef<any>;

  protected readonly sanitizer = inject(DomSanitizer);
  protected readonly changeDetectorRef = inject(ChangeDetectorRef);

  public link = input.required<string>();
  public height = input.required<number, unknown>({ transform: numberAttribute });
  public width = model.required<'sm' | 'md' | 'lg'>();
  public onLoadAction = input<() => void>();

  public setTheme(theme: FlowbiteTheme): void {
    if (theme === 'light') this.iframe.nativeElement.contentDocument.documentElement.classList.remove('dark');
    else this.iframe.nativeElement.contentDocument.documentElement.classList.add('dark');
  }

  protected callOnLoadAction(): void {
    const func = this.onLoadAction();

    if (func) func();
  }
}
