import type { Example } from './examples';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BadgeExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultBadge: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/badge/default.component.html', {
        responseType: 'text',
      }),
    },
  ];

  public readonly largeBadge: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/badge/large.component.html', {
        responseType: 'text',
      }),
    },
  ];

  public readonly linkBadge: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/badge/link.component.html', {
        responseType: 'text',
      }),
    },
  ];

  public readonly iconBadge: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/badge/icon.component.html', {
        responseType: 'text',
      }),
    },
  ];

  public readonly iconOnlyBadge: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/badge/icon-only.component.html', {
        responseType: 'text',
      }),
    },
  ];
}
