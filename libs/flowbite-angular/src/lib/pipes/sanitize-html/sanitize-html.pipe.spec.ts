import { SanitizeHtmlPipe } from '.';
import { ɵDomSanitizerImpl } from '@angular/platform-browser';

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe(new ɵDomSanitizerImpl(document));
    expect(pipe).toBeTruthy();
  });
});
