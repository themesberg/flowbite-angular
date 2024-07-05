import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { DemoPageComponent } from '../../../../shared/components/demo-page/demo-page.component';

import { BadgeComponent } from 'flowbite-angular';
import type { BundledLanguage } from 'shiki/bundle-web.mjs';

import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoPageComponent, DemoExampleComponent, BadgeComponent],
  selector: 'flowbite-badge-page',
  templateUrl: './badge-page.component.html',
})
export class BadgePageComponent {
  examples = [
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-badge>Default</flowbite-badge>
<flowbite-badge color="dark">Dark</flowbite-badge>
<flowbite-badge color="red">Red</flowbite-badge>
<flowbite-badge color="green">Green</flowbite-badge>
<flowbite-badge color="yellow">Yellow</flowbite-badge>
<flowbite-badge color="indigo">Indigo</flowbite-badge>
<flowbite-badge color="purple">Purple</flowbite-badge>
<flowbite-badge color="pink">Pink</flowbite-badge>
`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-badge size="sm">Default</flowbite-badge>
<flowbite-badge color="dark" size="sm">Dark</flowbite-badge>
<flowbite-badge color="red" size="sm">Red</flowbite-badge>
<flowbite-badge color="green" size="sm">Green</flowbite-badge>
<flowbite-badge color="yellow" size="sm">Yellow</flowbite-badge>
<flowbite-badge color="indigo" size="sm">Indigo</flowbite-badge>
<flowbite-badge color="purple" size="sm">Purple</flowbite-badge>
<flowbite-badge color="pink" size="sm">Pink</flowbite-badge>
`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-badge href="/badges">Default</flowbite-badge>
<flowbite-badge href="/badges" size="sm">Default</flowbite-badge>`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-badge><svg>...</svg> 2 minutes ago</flowbite-badge>
<flowbite-badge color="dark"><svg>...</svg> 3 days ago</flowbite-badge>`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-badge [iconOnly]="true"><svg>...</svg></flowbite-badge>
<flowbite-badge [iconOnly]="true" color="dark"><svg>...</svg></flowbite-badge>
<flowbite-badge [iconOnly]="true" size="sm"><svg>...</svg></flowbite-badge>
<flowbite-badge [iconOnly]="true" color="dark" size="sm"><svg>...</svg></flowbite-badge>`,
    },
  ];
}
