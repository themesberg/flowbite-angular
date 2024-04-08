import { DemoExampleComponent } from '../../common/demo-example/demo-example.component';
import { DemoPageComponent } from '../../common/demo-page/demo-page.component';

import {
  BadgeBaseTheme,
  BadgeComponent,
  ButtonComponent,
} from '@flowbite-angular/lib';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    DemoPageComponent,
    DemoExampleComponent,
    ButtonComponent,
    BadgeComponent,
  ],
  selector: 'flowbite-button-page',
  templateUrl: './button-page.component.html',
})
export class ButtonPageComponent {
  badgeCustomTheme: Partial<BadgeBaseTheme> = {
    root: {
      iconOnly: {
        enabled: 'py-0',
        disabled: '',
      },
    },
  };

  examples = [
    {
      language: 'html',
      code: `
<flowbite-button>Default</flowbite-button>
<flowbite-button color="gray">Gray</flowbite-button>
<flowbite-button color="dark">Dark</flowbite-button>
<flowbite-button color="light">Light</flowbite-button>
<flowbite-button color="success">Success</flowbite-button>
<flowbite-button color="failure">Failure</flowbite-button>
<flowbite-button color="warning">Warning</flowbite-button>
<flowbite-button color="purple">Purple</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button [pill]="true" color="gray">Gray</flowbite-button>
<flowbite-button [pill]="true" color="dark">Dark</flowbite-button>
<flowbite-button [pill]="true" color="light">Light</flowbite-button>
<flowbite-button [pill]="true" color="success">Success</flowbite-button>
<flowbite-button [pill]="true" color="failure">Failure</flowbite-button>
<flowbite-button [pill]="true" color="warning">Warning</flowbite-button>
<flowbite-button [pill]="true" color="purple">Purple</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button gradientMonochrome="info">Info</flowbite-button>
<flowbite-button gradientMonochrome="success">Success</flowbite-button>
<flowbite-button gradientMonochrome="cyan">Cyan</flowbite-button>
<flowbite-button gradientMonochrome="teal">Teal</flowbite-button>
<flowbite-button gradientMonochrome="lime">Lime</flowbite-button>
<flowbite-button gradientMonochrome="failure">Failure</flowbite-button>
<flowbite-button gradientMonochrome="pink">Pink</flowbite-button>
<flowbite-button gradientMonochrome="purple">Purple</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button gradientDuoTone="purpleToBlue">
  Purple to Blue
</flowbite-button>
<flowbite-button gradientDuoTone="cyanToBlue">
  Cyan to Blue
</flowbite-button>
<flowbite-button gradientDuoTone="greenToBlue">
  Green to Blue
</flowbite-button>
<flowbite-button gradientDuoTone="purpleToPink">
  Purple to Pink
</flowbite-button>
<flowbite-button gradientDuoTone="pinkToOrange">
  Pink to Orange
</flowbite-button>
<flowbite-button gradientDuoTone="tealToLime">
  Teal to Lime
</flowbite-button>
<flowbite-button gradientDuoTone="redToYellow">
  Red to Yellow
</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button [outline]="true" gradientDuoTone="purpleToBlue">
  Purple to Blue
</flowbite-button>
<flowbite-button [outline]="true" gradientDuoTone="cyanToBlue">
  Cyan to Blue
</flowbite-button>
<flowbite-button [outline]="true" gradientDuoTone="greenToBlue">
  Green to Blue
</flowbite-button>
<flowbite-button [outline]="true" gradientDuoTone="purpleToPink">
  Purple to Pink
</flowbite-button>
<flowbite-button [outline]="true" gradientDuoTone="pinkToOrange">
  Pink to Orange
</flowbite-button>
<flowbite-button [outline]="true" gradientDuoTone="tealToLime">
  Teal to Lime
</flowbite-button>
<flowbite-button [outline]="true" gradientDuoTone="redToYellow">
  Red to Yellow
</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button [outline]="true">Default</flowbite-button>
<flowbite-button [outline]="true" color="dark">Dark</flowbite-button>
<flowbite-button [outline]="true" color="success">Success</flowbite-button>
<flowbite-button [outline]="true" color="failure">Failure</flowbite-button>
<flowbite-button [outline]="true" color="warning">Warning</flowbite-button>
<flowbite-button [outline]="true" color="purple">Purple</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button size="xs">Extra small</flowbite-button>
<flowbite-button size="sm">Small</flowbite-button>
<flowbite-button size="md">Base</flowbite-button>
<flowbite-button size="lg">Large</flowbite-button>
<flowbite-button size="xl">Extra large</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button>
  <svg class="mr-2 -ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
  Buy now
</flowbite-button>
<flowbite-button>
  Choose plan
  <svg aria-hidden="true" class="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button>
  Messages
  <flowbite-badge customStyle="py-0" [iconOnly]="true" class="ml-2">2</flowbite-badge>
</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button>
  <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</flowbite-button>
<flowbite-button [pill]="true">
  <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</flowbite-button>
<flowbite-button [outline]="true">
  <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</flowbite-button>
<flowbite-button [outline]="true" [pill]="true">
  <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button [disabled]="true">Disabled button</flowbite-button>
`,
    },
  ];
}
