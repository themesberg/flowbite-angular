import { FlowbiteIFrameWrapperComponent } from '../../../../frames/iframe-wrapper.component';
import type { Example } from '../../../examples/examples';
import { ShikiComponent } from '../shiki/shiki.component';

import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import type { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [NgClass, FlowbiteIFrameWrapperComponent, ShikiComponent],
  selector: 'flowbite-demo-example',
  templateUrl: './demo-example.component.html',
})
export class DemoExampleComponent {
  public httpClient = inject(HttpClient);

  public title = input.required<string>();
  public subtitle = input<string>();

  public examples = input.required<Example[]>();
  public githubLink = input<string>();
  public height = input<number, unknown>(150, { transform: numberAttribute });

  protected link = computed<string>(() => this.examples().filter((x) => x.name !== undefined)[0].name || '');

  protected getAsyncCode(name?: string): Observable<string> {
    return this.httpClient.get(`assets/examples/${name}.component.html`, { responseType: 'text' });
  }
}
