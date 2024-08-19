import type { Example } from './examples';

import { buttonTheme, themeToString } from 'flowbite-angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonExampleService {
  public readonly defaultButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/default',
    },
  ];

  public readonly pillButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/pill',
    },
  ];

  public readonly gradientMonochromeButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/gradient-monochrome',
    },
  ];

  public readonly gradientDuotoneButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/gradient-duotone',
    },
  ];

  public readonly gradientOutlineButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/gradient-outline',
    },
  ];

  public readonly outlineButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/outline',
    },
  ];

  public readonly sizeButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/size',
    },
  ];

  public readonly iconButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/icon',
    },
  ];

  public readonly labelButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/label',
    },
  ];

  public readonly iconOnlyButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/icon-only',
    },
  ];

  public readonly disabledButton: Example[] = [
    {
      language: 'angular-html',
      name: 'button/disabled',
    },
  ];

  public readonly buttonTheme: Example[] = [
    {
      name: 'Button theme',
      language: 'angular-ts',
      rawCode: themeToString(buttonTheme),
    },
  ];
}
