import type { Example } from './examples';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultDropdown: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/dropdown/default.component.html', { responseType: 'text' }),
    },
  ];

  public readonly dividerDropdown: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/dropdown/divider.component.html', { responseType: 'text' }),
    },
  ];

  public readonly headerDropdown: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/dropdown/header.component.html', { responseType: 'text' }),
    },
  ];

  public readonly placedDropdown: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/dropdown/placed.component.html', { responseType: 'text' }),
    },
  ];
}
