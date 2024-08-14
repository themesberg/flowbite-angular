import type { Example } from './examples';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccordionExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultAccordion: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/accordion/default.component.html', {
        responseType: 'text',
      }),
    },
  ];

  public readonly alwaysOpenAccordion: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/accordion/always-open.component.html', {
        responseType: 'text',
      }),
    },
  ];
}
