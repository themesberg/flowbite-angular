import { SanitizeHtmlPipe } from '.';
import { ╔ÁDomSanitizerImpl } from '@angular/platform-browser';

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe(new ╔ÁDomSanitizerImpl(document));
    expect(pipe).toBeTruthy();
  });
});
