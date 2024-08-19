import type { Example } from './examples';

import { modalBodyTheme, modalFooterTheme, modalHeaderTheme, modalTheme, themeToString } from 'flowbite-angular';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultModal: Example[] = [
    {
      language: 'angular-html',
      name: 'modal/default',
    },
  ];

  public readonly sizeModal: Example[] = [
    {
      language: 'angular-html',
      name: 'modal/size',
    },
  ];

  public readonly dismissableModal: Example[] = [
    {
      language: 'angular-html',
      name: 'modal/dismissable',
    },
  ];

  public readonly formModal: Example[] = [
    {
      language: 'angular-html',
      name: 'modal/form',
    },
  ];

  public readonly positionedModal: Example[] = [
    {
      language: 'angular-html',
      name: 'modal/positioned',
    },
  ];

  public readonly modalTheme: Example[] = [
    {
      name: 'Modal theme',
      language: 'angular-ts',
      rawCode: themeToString(modalTheme),
    },
    {
      name: 'Modal body theme',
      language: 'angular-ts',
      rawCode: themeToString(modalBodyTheme),
    },
    {
      name: 'Modal header theme',
      language: 'angular-ts',
      rawCode: themeToString(modalHeaderTheme),
    },
    {
      name: 'Modal footer theme',
      language: 'angular-ts',
      rawCode: themeToString(modalFooterTheme),
    },
  ];
}
