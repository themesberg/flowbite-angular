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
      name: 'modal/default',
    },
  ];

  public readonly sizeModal: Example[] = [
    {
      language: 'html',
      name: 'modal/size',
    },
  ];

  public readonly dismissableModal: Example[] = [
    {
      language: 'html',
      name: 'modal/dismissable',
    },
  ];

  public readonly formModal: Example[] = [
    {
      language: 'html',
      name: 'modal/form',
    },
  ];

  public readonly positionedModal: Example[] = [
    {
      language: 'html',
      name: 'modal/positioned',
    },
  ];
}
