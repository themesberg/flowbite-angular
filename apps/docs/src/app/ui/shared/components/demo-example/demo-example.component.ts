/* eslint-disable @typescript-eslint/no-unsafe-return */

import { FlowbiteIFrameWrapperComponent } from '../../../../frames/iframe-wrapper.component';
import type { Example } from '../../../examples/examples';
import { ShikiComponent } from '../shiki/shiki.component';

import { isPlatformBrowser, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, HostBinding, inject, input, numberAttribute, PLATFORM_ID } from '@angular/core';
import { of, type Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [NgClass, FlowbiteIFrameWrapperComponent, ShikiComponent],
  selector: 'flowbite-demo-example',
  template: `
    <span
      [id]="title()"
      class="pb-2 text-2xl font-bold text-gray-900 dark:text-white"
      >{{ title() }}</span
    >
    <span class="pb-4 text-base text-gray-700 dark:text-gray-400">{{ subtitle() }}</span>
    <div class="grid rounded-t-xl shadow-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <flowbite-iframe-wrapper
        [githubLink]="githubLink()"
        [height]="height()"
        [link]="'frames/' + link()" />

      @for (item of examples(); track $index) {
        <flowbite-shiki
          ngProjectAs="code-example"
          [language]="item.language"
          [codeAsync]="item.rawCode || getAsyncCode(item.name)" />
      }
    </div>
  `,
})
export class DemoExampleComponent {
  @HostBinding('class') hostClass = 'flex flex-col';

  public platformId = inject(PLATFORM_ID);
  public httpClient = inject(HttpClient);

  public title = input.required<string>();
  public subtitle = input<string>();

  public examples = input.required<Example[]>();
  public githubLink = input<string>();
  public height = input<number, unknown>(150, { transform: numberAttribute });

  protected link = computed<string>(() => this.examples().filter((x) => x.name !== undefined)[0].name || '');

  protected getAsyncCode(name?: string): Observable<string> {
    if (isPlatformBrowser(this.platformId)) {
      return this.httpClient.get(`/assets/examples/${name}.component.html`, { responseType: 'text' });
    }

    return of('');
  }
}
