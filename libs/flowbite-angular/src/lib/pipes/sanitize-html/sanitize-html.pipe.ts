import type { PipeTransform } from '@angular/core';
import { inject, Pipe } from '@angular/core';
import type { SafeHtml } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Sanitize a string as trusted HTML.
 *
 * @see `DomSanitizer`
 */
@Pipe({
  standalone: true,
  name: 'sanitizeHtml',
})
export class SanitizeHtmlPipe implements PipeTransform {
  private _sanitizer = inject(DomSanitizer);

  /**
   * Return the result of 'bypassSecurityTrustHtml' function of DomSanitizer for the parameter.
   *
   * @param v The string to be transformed.
   * @returns The SfeHtml from the DomSanitizer.
   */
  transform(v: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}
