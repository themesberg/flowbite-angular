import { DemoExampleComponent } from '../../../../common/demo-example/demo-example.component';
import { DemoPageComponent } from '../../../../common/demo-page/demo-page.component';

import { AlertComponent } from 'flowbite-angular';
import type { BundledLanguage } from 'shiki/langs';

import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoPageComponent, DemoExampleComponent, AlertComponent],
  selector: 'flowbite-alert-page',
  templateUrl: './alert-page.component.html',
})
export class AlertPageComponent {
  examples = [
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-alert>
  <span class="font-medium">Info alert!</span> Change a few things up
  and try submitting again.
</flowbite-alert>
`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-alert [icon]="icon" color="red">
  <span class="font-medium">Info alert!</span> Change a few things up
  and try submitting again.
</flowbite-alert>
<ng-template #icon><svg>...</svg></ng-template>`,
    },
    {
      language: 'ts' as BundledLanguage,
      code: `onDismiss = () => alert('Alert dismissed!');`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-alert color="green" [dismiss]="onDismiss">
  <span class="font-medium">Info alert!</span> Change a few things up
  and try submitting again.
</flowbite-alert>`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-alert
  color="yellow"
  [withBorderAccent]="true"
  [rounded]="false"
>
  <span class="font-medium">Info alert!</span> Change a few things up
  and try submitting again.
</flowbite-alert>`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-alert [icon]="icon" [additionalContent]="additionalContent">
  <h3 class="text-lg font-medium text-blue-700 dark:text-blue-800">
    This is an info alert
  </h3>
</flowbite-alert>
<ng-template #icon><svg>...</svg></ng-template>
<ng-template #additionalContent><svg>...</svg></ng-template>
`,
    },
  ];

  onDismiss = () => alert('Alert dismissed!');
}
