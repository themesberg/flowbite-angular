import type { Example } from './examples';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbExampleService {
  public readonly defaultBreadcrumb: Example[] = [
    {
      language: 'html',
      name: 'breadcrumb/default',
    },
  ];
}
