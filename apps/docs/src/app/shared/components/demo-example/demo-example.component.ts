import { ShikiComponent } from '../shiki/shiki.component';

import type { BundledLanguage } from 'shiki/bundle-web.mjs';

import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass, ShikiComponent],
  selector: 'flowbite-demo-example',
  templateUrl: './demo-example.component.html',
})
export class DemoExampleComponent {
  public title = input<string>();
  public subtitle = input<string>();
  public codes = input.required<{ language: BundledLanguage; code: string }[]>();
  public codeClassName = input<string>();
}
