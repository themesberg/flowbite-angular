import type { Example } from './examples';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/default.component.html', { responseType: 'text' }),
    },
  ];

  public readonly pillButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/pill.component.html', { responseType: 'text' }),
    },
  ];

  public readonly gradientMonochromeButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/gradient-monochrome.component.html', { responseType: 'text' }),
    },
  ];

  public readonly gradientDuotoneButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/gradient-duotone.component.html', { responseType: 'text' }),
    },
  ];

  public readonly gradientOutlineButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/gradient-outline.component.html', { responseType: 'text' }),
    },
  ];

  public readonly outlineButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/outline.component.html', { responseType: 'text' }),
    },
  ];

  public readonly sizeButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/size.component.html', { responseType: 'text' }),
    },
  ];

  public readonly iconButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/icon.component.html', { responseType: 'text' }),
    },
  ];

  public readonly labelButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/label.component.html', { responseType: 'text' }),
    },
  ];

  public readonly iconOnlyButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/icon-only.component.html', { responseType: 'text' }),
    },
  ];

  public readonly disabledButton: Example[] = [
    {
      language: 'html',
      code: this.httpClient.get('assets/examples/button/disabled.component.html', { responseType: 'text' }),
    },
  ];
}
