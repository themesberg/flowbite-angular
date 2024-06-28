import { ShikiComponent } from '../shiki/shiki.component';

import type { BundledLanguage } from 'shiki/langs';

import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass, NgFor, ShikiComponent],
  selector: 'flowbite-demo-example',
  templateUrl: './demo-example.component.html',
})
export class DemoExampleComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() codes: { language: BundledLanguage; code: string }[] = [];
  @Input() codeClassName?: string;
}
