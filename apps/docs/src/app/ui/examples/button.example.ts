import type { Example } from './examples';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonExampleService {
  public readonly defaultButton: Example[] = [
    {
      language: 'html',
      name: 'button/default',
    },
  ];

  public readonly pillButton: Example[] = [
    {
      language: 'html',
      name: 'button/pill',
    },
  ];

  public readonly gradientMonochromeButton: Example[] = [
    {
      language: 'html',
      name: 'button/gradient-monochrome',
    },
  ];

  public readonly gradientDuotoneButton: Example[] = [
    {
      language: 'html',
      name: 'button/gradient-duotone',
    },
  ];

  public readonly gradientOutlineButton: Example[] = [
    {
      language: 'html',
      name: 'button/gradient-outline',
    },
  ];

  public readonly outlineButton: Example[] = [
    {
      language: 'html',
      name: 'button/outline',
    },
  ];

  public readonly sizeButton: Example[] = [
    {
      language: 'html',
      name: 'button/size',
    },
  ];

  public readonly iconButton: Example[] = [
    {
      language: 'html',
      name: 'button/icon',
    },
  ];

  public readonly labelButton: Example[] = [
    {
      language: 'html',
      name: 'button/label',
    },
  ];

  public readonly iconOnlyButton: Example[] = [
    {
      language: 'html',
      name: 'button/icon-only',
    },
  ];

  public readonly disabledButton: Example[] = [
    {
      language: 'html',
      name: 'button/disabled',
    },
  ];
}
