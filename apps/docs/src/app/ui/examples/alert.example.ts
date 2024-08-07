import type { Example } from './examples';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultAlert: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/alert/default.component.html', {
        responseType: 'text',
      }),
    },
  ];

  public readonly iconAlert: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/alert/icon.component.html', {
        responseType: 'text',
      }),
    },
  ];

  public readonly borderAlert: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/alert/border.component.html', {
        responseType: 'text',
      }),
    },
  ];

  public readonly additionalContentAlert: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/alert/additional-content.component.html', {
        responseType: 'text',
      }),
    },
  ];
}
