import type { Example } from './examples';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultBreadcrumb: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/breadcrumb/default.component.html', { responseType: 'text' }),
    },
  ];
}
