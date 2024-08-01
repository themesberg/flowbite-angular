import type { FlowbiteTheme } from 'flowbite-angular';

import type { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef, Component, ElementRef, inject, input, numberAttribute, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'flowbite-iframe',
  standalone: true,
  imports: [],
  template: `
    <iframe
      [src]="sanitizer.bypassSecurityTrustResourceUrl(link())"
      class="w-full h-0 mx-auto bg-white iframe-code"
      frameborder="0"
      style="height: {{ height() }}px"
      (load)="callOnLoadAction()"
      #iframe></iframe>
  `,
})
export class FlowbiteIFrameComponent implements AfterViewInit {
  @ViewChild('iframe', { static: false })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected iframe!: ElementRef<any>;

  protected readonly sanitizer = inject(DomSanitizer);
  protected readonly changeDetectorRef = inject(ChangeDetectorRef);

  public link = input.required<string>();
  public height = input<number, unknown>(150, { transform: numberAttribute });
  public onLoadAction = input<() => void>();

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detach();
  }

  public setTheme(theme: FlowbiteTheme): void {
    if (theme === 'light') this.iframe.nativeElement.contentDocument.documentElement.classList.remove('dark');
    else this.iframe.nativeElement.contentDocument.documentElement.classList.add('dark');
  }

  protected callOnLoadAction(): void {
    const func = this.onLoadAction();

    if (func) func();
  }
}
