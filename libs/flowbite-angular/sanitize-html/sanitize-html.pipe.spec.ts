import { SanitizeHtmlPipe } from './sanitize-html.pipe';

import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('SanitizeHtmlPipe', () => {
  let pipe: SanitizeHtmlPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DomSanitizer, SanitizeHtmlPipe] });
    pipe = TestBed.inject(SanitizeHtmlPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
