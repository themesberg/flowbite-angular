import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: 'iframe[flowbiteIframeChachedSrc]',
  standalone: true,
})
export class IframeCachedSrcDirective {
  protected elementRef = inject(ElementRef);

  @Input()
  public get cachedSrc(): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.elementRef.nativeElement.src;
  }
  public set cachedSrc(value: string) {
    if (this.elementRef.nativeElement.src !== value) {
      this.elementRef.nativeElement.src = value;
    }
  }
}
