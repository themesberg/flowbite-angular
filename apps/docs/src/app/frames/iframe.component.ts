import type { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef, Component, inject, input, numberAttribute } from '@angular/core';
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
      style="height: {{ height() }}px"></iframe>
  `,
})
export class FlowbiteIFrameComponent implements AfterViewInit {
  protected readonly sanitizer = inject(DomSanitizer);
  protected readonly changeDetectorRef = inject(ChangeDetectorRef);

  public link = input.required<string>();
  public height = input<number, unknown>(150, { transform: numberAttribute });

  ngAfterViewInit(): void {
    this.changeDetectorRef.detach();
  }
}
