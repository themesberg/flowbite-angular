import type { Example } from './examples';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultModal: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/modal/default.component.html', { responseType: 'text' }),
    },
  ];

  public readonly sizeModal: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/modal/size.component.html', { responseType: 'text' }),
    },
  ];

  public readonly dismissableModal: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/modal/dismissable.component.html', { responseType: 'text' }),
    },
  ];

  public readonly formModal: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/modal/form.component.html', { responseType: 'text' }),
    },
  ];

  public readonly positionedModal: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/modal/positioned.component.html', { responseType: 'text' }),
    },
  ];
}
