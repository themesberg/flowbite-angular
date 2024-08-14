import type { Example } from './examples';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertExampleService {
  public readonly defaultAlert: Example[] = [
    {
      language: 'html',
      name: 'alert/default',
    },
  ];

  public readonly iconAlert: Example[] = [
    {
      language: 'html',
      name: 'alert/icon',
    },
  ];

  public readonly borderAlert: Example[] = [
    {
      language: 'html',
      name: 'alert/border',
    },
  ];

  public readonly borderAccentAlert: Example[] = [
    {
      language: 'html',
      name: 'alert/border-accent',
    },
  ];

  public readonly additionalContentAlert: Example[] = [
    {
      language: 'html',
      name: 'alert/additional-content',
    },
  ];

  public readonly dismissableAlert: Example[] = [
    {
      language: 'html',
      name: 'alert/dismissable',
    },
    {
      language: 'typescript',
      rawCode: 'onDismiss = () => alert("Alert have been dismissed");',
    },
  ];
}
