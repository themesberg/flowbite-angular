import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { highlightElement } from 'prismjs';

@Component({
  selector: 'flowbite-prism',
  template: `<pre
    *ngIf="language"
    class="language-{{ language }} w-full !m-0"
  ><code #codeEle class="language-{{ language }}">{{code}}</code></pre>`,
})
export class PrismComponent implements AfterViewInit {
  @ViewChild('codeEle') codeEle?: ElementRef;
  @Input() code?: string;
  @Input() language?: string;

  ngAfterViewInit() {
    this.codeEle && highlightElement(this.codeEle.nativeElement);
  }
}
