import type { TableOfContent } from '../shared/models/table-of-content';
import type { Example } from './examples';

import { alertTheme, themeToString } from 'flowbite-angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertExampleService {
  public readonly defaultAlert: Example[] = [
    {
      language: 'angular-html',
      name: 'alert/default',
    },
  ];

  public readonly iconAlert: Example[] = [
    {
      language: 'angular-html',
      name: 'alert/icon',
    },
  ];

  public readonly borderAlert: Example[] = [
    {
      language: 'angular-html',
      name: 'alert/border',
    },
  ];

  public readonly borderAccentAlert: Example[] = [
    {
      language: 'angular-html',
      name: 'alert/border-accent',
    },
  ];

  public readonly additionalContentAlert: Example[] = [
    {
      language: 'angular-html',
      name: 'alert/additional-content',
    },
  ];

  public readonly dismissableAlert: Example[] = [
    {
      language: 'angular-html',
      name: 'alert/dismissable',
    },
    {
      language: 'angular-ts',
      rawCode: 'onDismiss = () => alert("Alert have been dismissed");',
    },
  ];

  public readonly alertTheme: Example[] = [
    {
      name: 'Alert theme',
      language: 'angular-ts',
      rawCode: themeToString(alertTheme),
    },
  ];

  public readonly tableOfContent: TableOfContent[] = [
    {
      fragmentName: 'Default alert',
    },
    {
      fragmentName: 'Alerts with icon',
    },
    {
      fragmentName: 'Bordered alerts',
    },
    {
      fragmentName: 'Dismissable alerts',
    },
    {
      fragmentName: 'Border accent',
    },
    {
      fragmentName: 'Additional content',
    },
    {
      fragmentName: 'Theme',
      children: [
        {
          fragmentName: 'Alert theme',
        },
      ],
    },
  ];
}
