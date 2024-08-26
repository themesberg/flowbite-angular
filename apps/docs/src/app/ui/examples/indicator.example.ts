import type { TableOfContent } from '../shared/models/table-of-content';
import type { Example } from './examples';

import { indicatorTheme, themeToString } from 'flowbite-angular';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndicatorExampleService {
  protected readonly httpClient = inject(HttpClient);

  public readonly defaultIndicator: Example[] = [
    {
      language: 'angular-html',
      name: 'indicator/default',
    },
  ];

  public readonly legendIndicator: Example[] = [
    {
      language: 'angular-html',
      name: 'indicator/legend',
    },
  ];

  public readonly countIndicator: Example[] = [
    {
      language: 'angular-html',
      name: 'indicator/count',
    },
  ];

  public readonly positionedIndicator: Example[] = [
    {
      language: 'angular-html',
      name: 'indicator/positioned',
    },
  ];

  public readonly indicatorTheme: Example[] = [
    {
      name: 'Indicator theme',
      language: 'angular-ts',
      rawCode: themeToString(indicatorTheme),
    },
  ];

  public readonly tableOfContent: TableOfContent[] = [
    {
      fragmentName: 'Default indicator',
    },
    {
      fragmentName: 'Legend indicator',
    },
    {
      fragmentName: 'Indicator count',
    },
    {
      fragmentName: 'Indicator position',
    },
    {
      fragmentName: 'Theme',
      children: [
        {
          fragmentName: 'Indicator theme',
        },
      ],
    },
  ];
}
