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
      code: this.httpClient.get('assets/examples/indicator/default.component.html', { responseType: 'text' }),
    },
  ];

  public readonly legendIndicator: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/indicator/legend.component.html', { responseType: 'text' }),
    },
  ];

  public readonly countIndicator: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/indicator/count.component.html', { responseType: 'text' }),
    },
  ];

  public readonly positionedIndicator: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/indicator/positioned.component.html', { responseType: 'text' }),
    },
  ];
}
