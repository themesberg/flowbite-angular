import type { Example } from '../../../examples/examples';
import { ShikiComponent } from '../shiki/shiki.component';

import { NgClass } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass, ShikiComponent],
  selector: 'flowbite-theme-example',
  template: `
    <h1 class="docs">Theme</h1>
    @for (item of examples(); track $index) {
      <span class="py-2 text-2xl font-bold text-gray-900 dark:text-white">{{ item.name }}</span>
      <span class="pb-4 text-base text-gray-700 dark:text-gray-400">{{ subtitle() }}</span>
      <div class="grid rounded-t-xl shadow-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <flowbite-shiki
          ngProjectAs="code-example"
          [language]="item.language"
          [codeAsync]="item.rawCode || ''" />
      </div>
    }
  `,
})
export class ThemeExampleComponent {
  @HostBinding('class') hostClass = 'flex flex-col';

  public subtitle = input<string>();
  public examples = input.required<Example[]>();
}