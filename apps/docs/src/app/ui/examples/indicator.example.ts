import type { Example } from './examples';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndicatorExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultIndicator: Example[] = [
    {
      language: 'html',
      name: 'indicator/default',
    },
  ];

  public readonly legendIndicator: Example[] = [
    {
      language: 'html',
      name: 'indicator/legend',
    },
  ];

  public readonly countIndicator: Example[] = [
    {
      language: 'html',
      name: 'indicator/count',
    },
  ];

  public readonly positionedIndicator: Example[] = [
    {
      language: 'html',
      name: 'indicator/positioned',
    },
  ];
}
