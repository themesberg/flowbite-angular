import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { highlightElement } from 'prismjs';

import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'flowbite-prism',
  templateUrl: './prism.component.html',
})
export class PrismComponent implements AfterViewInit {
  @ViewChild('codeEle') codeEle?: ElementRef;
  @Input() code?: string;
  @Input() language?: string;

  ngAfterViewInit() {
    this.codeEle && highlightElement(this.codeEle.nativeElement);
  }
}
